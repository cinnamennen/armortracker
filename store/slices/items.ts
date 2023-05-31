import { ingredientData } from "@/data/ingredients"
import { RootState } from "@/store/store"
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"

import { Recipe } from "@/types/data"

export type ItemState = Record<string, number>
export const initialState: ItemState = Object.fromEntries(
  Object.keys(ingredientData).map((k) => [k, 0])
)
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ item: string; level: number }>) {
      state[action.payload.item] = Math.max(action.payload.level, 0)
    },
    initStore(state, action: PayloadAction<ItemState>) {
      state = action.payload
    },
    clear(state) {
      state = initialState
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
      state[action.payload.item] -= action.payload.amount
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
