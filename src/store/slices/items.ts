import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import { RootState } from "@/store/store"
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Recipe } from "@/types/data"

export type ItemState = Record<string, number>
export const initialState: ItemState = Object.fromEntries(
  Object.values(ingredientData).map((k) => [k.displayName, 0])
)
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ item: string; level: number }>) {
      state[action.payload.item] = Math.max(action.payload.level, 0)
    },
    initStore(state, action: PayloadAction<ItemState>) {
      return action.payload
    },
    clear() {
      return initialState
    },
    consume(state, action: PayloadAction<Recipe>) {
      Object.entries(action.payload).forEach(([name, amount]) => {
        if (state[name] === undefined) state[name] = 0
        state[name] -= amount ?? 0
        state[name] = Math.max(state[name] as number, 0)
      })
    },
    use(state, action: PayloadAction<{ item: string; amount: number }>) {
      if (state[action.payload.item] === undefined)
        state[action.payload.item] = 0
      state[action.payload.item]! -= action.payload.amount
      state[action.payload.item] = Math.max(
        state[action.payload.item] as number,
        0
      )
    },
  },
})
export const { consume, clear, set, initStore, use } = itemsSlice.actions
export default itemsSlice.reducer
export const selectItems = (state: RootState) => state.items
export const selectItemByName = createSelector(
  [selectItems, (_: RootState, name: string) => name],
  (items, name) => items[name] ?? 0
)

export const selectItemByIngredient = createSelector(
  [selectItems, (_: RootState, ingredient: Ingredient) => ingredient],
  (items, ingredient) => items[ingredientData[ingredient].displayName] ?? 0
)

export const getIngredientByName = (name: string) =>
  (Object.entries(ingredientData).find(([, iv]) => iv.displayName == name) ?? [
    null,
  ])[0]

export const selectUsefulItems = createSelector(
  [selectItems],
  (itemSelections) =>
    Object.fromEntries(
      Object.entries(itemSelections).map(([key, val]) => [
        getIngredientByName(key),
        val,
      ])
    )
)
