import { armor } from "@/data/armor"
import { RootState } from "@/store/store"
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"

// import { HYDRATE } from "next-redux-wrapper"
import { Level, Recipe, isUpgradeable } from "@/types/data"

type ArmorData = { level: number; ignored: boolean }
export type ArmorState = Record<string, ArmorData>
export const initialState: ArmorState = Object.fromEntries(
  armor.map((a) => [a.displayName, { level: Level.Base, ignored: false }])
)
export const armorSlice = createSlice({
  name: "armor",
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ armor: string; level: number }>) {
      const stateElement = state[action.payload.armor]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.level = action.payload.level
    },
    upgrade(state, action: PayloadAction<string>) {
      const stateElement = state[action.payload]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.level += 1
      stateElement.level = Math.min(stateElement.level, Level.Four)
    },
    toggleIgnore(state, action: PayloadAction<string>) {
      const stateElement = state[action.payload]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.ignored = !stateElement.ignored
    },
    initStore(state, action: PayloadAction<ArmorState>) {
      return action.payload
    },
    clear(state) {
      state = initialState
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     console.log("HYDRATE", state, action.payload)
  //     return {
  //       ...state,
  //       ...action.payload.armor,
  //     }
  //   },
  // },
})

export const { clear, set, upgrade, toggleIgnore, initStore } =
  armorSlice.actions
export const selectArmor = (state: RootState) => state.armor
export default armorSlice.reducer

export const selectArmorByName = createSelector(
  [selectArmor, (_, name: string) => name],
  // Output selector gets (`items, category)` as args
  (armor, category) => armor[category]
)
export const selectArmorIsUpgradable = createSelector(
  [selectArmorByName],
  (armor) => (armor?.level ?? Level.Base) < Level.Four
)
const mergeRecipe = (previousValue: Recipe, currentValue: Recipe) => {
  Object.entries(currentValue).forEach(([name, count]) => {
    if (!previousValue[name]) previousValue[name] = 0

    // @ts-ignore
    previousValue[name] += count
  })

  return previousValue
}
export const selectNeededIngredients = createSelector(
  [selectArmor],
  (allArmor) =>
    armor
      .filter(isUpgradeable)
      .filter((a) => {
        const armorSelection = allArmor[a.displayName]
        return armorSelection && !armorSelection.ignored
      })
      .map((a) => ({
        ...a,
        upgrades: a.upgrades.slice(
          allArmor[a.displayName]?.level ?? Level.Base
        ),
      }))
      .map((a) => a.upgrades)
      .map((u) => u.reduce(mergeRecipe, {} as Recipe))
      .reduce(mergeRecipe, {} as Recipe)
)
export const selectNextUpgrades = createSelector([selectArmor], (allArmor) =>
  Object.fromEntries(
    armor
      .filter(isUpgradeable)
      .map((a) => [
        a.displayName,
        a.upgrades[allArmor[a.displayName]?.level ?? Level.Base],
      ])
  )
)

export const selectNextUpgradeByArmorName = createSelector(
  [selectNextUpgrades, (_, name: string) => name],
  (nextUpgrades, name): Partial<Recipe> => nextUpgrades[name] ?? {}
)