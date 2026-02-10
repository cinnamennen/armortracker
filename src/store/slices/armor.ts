import { armor } from "@/data/armor"
import { ArmorGroup } from "@/data/enum"
import { RootState } from "@/store/store"
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { isUpgradeable, Level, Recipe } from "@/types/data"
import { sortArmor } from "@/lib/utils"

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
    clear() {
      return initialState
    },
  },
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
    const prior: number = previousValue[name] ?? 0

    previousValue[name] = (count ?? 0) + prior
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

export const selectArmorByCategory = createSelector(
  [(_, category: ArmorGroup) => category],
  (category) =>
    armor
      .filter(isUpgradeable)
      .filter((a) => a.armorGroup === category)
      .sort(sortArmor)
)

export const selectArmorByCategoryAndFinished = createSelector(
  [selectArmor, (_, category: ArmorGroup) => category],
  (allArmor, category) =>
    armor
      .filter(isUpgradeable)
      .filter((a) => a.armorGroup === category)
      .filter((a) => allArmor[a.displayName]?.level !== Level.Four)
      .sort(sortArmor)
)
