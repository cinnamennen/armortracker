import { useMemo } from "react"
import { armor } from "@/data/armor"
import { ingredientData } from "@/data/ingredients"
import { selectArmor } from "@/store/slices/armor"
import { selectItems } from "@/store/slices/items"
import { useAppSelector } from "@/store/store"

import { Level, Recipe, isUpgradeable } from "@/types/data"

const mergeRecipe = (previousValue: Recipe, currentValue: Recipe) => {
  Object.entries(currentValue).forEach(([name, count]) => {
    if (!previousValue[name]) previousValue[name] = 0

    // @ts-ignore
    previousValue[name] += count
  })

  return previousValue
}

export default function useChecklist(): Recipe {
  // TODO make selector
  const armorSelections = useAppSelector(selectArmor)
  const itemSelections = useAppSelector(selectItems)
  const recipeIngredients = useMemo(
    () =>
      armor
        .filter((a) => {
          const armorSelection = armorSelections[a.displayName]
          return armorSelection && !armorSelection.ignored
        })
        .filter(isUpgradeable)
        .map((a) => ({
          ...a,
          upgrades: a.upgrades.slice(
            armorSelections[a.displayName]?.level ?? Level.Base
          ),
        }))
        .map((a) => a.upgrades)
        .map((u) => u.reduce(mergeRecipe, {} as Recipe))
        .reduce(mergeRecipe, {} as Recipe),
    [armorSelections]
  )

  const usefulItems = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(itemSelections).map(([key, val]) => [
          (Object.entries(ingredientData).find(
            ([ik, iv]) => iv.displayName == key
          ) ?? [null])[0],
          val,
        ])
      ),
    [itemSelections]
  )
  return useMemo(
    () =>
      Object.fromEntries(
        Object.entries(recipeIngredients)
          .map(([key, val]) => [
            key,
            (val ?? Infinity) - (usefulItems[key] ?? 0),
          ])
          .filter(([key, val]) => val && val > 0)
      ),
    [recipeIngredients, usefulItems]
  )
}
