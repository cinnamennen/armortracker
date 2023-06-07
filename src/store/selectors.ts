import { Ingredient } from "@/data/enum"
import {
  selectArmor,
  selectArmorByCategory,
  selectNeededIngredients,
} from "@/store/slices/armor"
import { selectItems } from "@/store/slices/items"
import { selectDense } from "@/store/slices/settings"
import { RootState } from "@/store/store"
import { createSelector } from "@reduxjs/toolkit"

import { Level, Recipe } from "@/types/data"

export const selectMissingItems = createSelector(
  [selectNeededIngredients, selectItems],
  (recipeIngredients, usefulItems): Partial<Recipe> => {
    return Object.fromEntries(
      Object.entries(recipeIngredients)
        .map<[Ingredient, number]>(([key, val]) => [
          key,
          (val ?? Infinity) - (usefulItems[key] ?? 0),
        ])
        .filter(([, val]) => val && val > 0)
    )
  }
)
export const selectMissingItemsByName = createSelector(
  [selectMissingItems, (_: RootState, name: Ingredient) => name],
  (items, name): number => items[name] ?? 0
)
export const selectNeededIngredientsByName = createSelector(
  [selectNeededIngredients, (_, name: Ingredient) => name],
  (items, name): number => items[name] ?? 0
)

export const selectRelevantArmor = createSelector(
  [selectArmorByCategory, selectDense, selectArmor],
  (armor, dense, allArmor) =>
    !dense
      ? armor
      : armor.filter((a) => allArmor[a.displayName]?.level !== Level.Four)
)
