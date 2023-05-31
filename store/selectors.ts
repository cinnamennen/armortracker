import { Ingredient } from "@/data/enum"
import { selectNeededIngredients } from "@/store/slices/armor"
import { selectUsefulItems } from "@/store/slices/items"
import { RootState } from "@/store/store"
import { createSelector } from "@reduxjs/toolkit"

import { Recipe } from "@/types/data"

export const selectNeededItems = createSelector(
  [selectNeededIngredients, selectUsefulItems],
  (recipeIngredients, usefulItems): Record<string, number> =>
    Object.fromEntries(
      Object.entries(recipeIngredients)
        .map(([key, val]) => [key, (val ?? Infinity) - (usefulItems[key] ?? 0)])
        .filter(([key, val]) => val && val > 0)
    )
)
export const selectNeededItemsByName = createSelector(
  [selectNeededItems, (_: RootState, name: string) => name],
  (items, name): number => items[name] ?? 0
)
