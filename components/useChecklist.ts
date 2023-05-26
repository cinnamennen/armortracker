import { useMemo } from "react"
import { useArmorContext } from "@/context/ArmorContext"
import { armor } from "@/data/armor"
import { ingredientsData } from "@/data/ingredients"

import { Level, Recipe, isUpgradeable } from "@/types/data"
import {useItemContext} from "@/context/ItemContext";

const mergeRecipe = (previousValue: Recipe, currentValue: Recipe) => {
  Object.entries(currentValue).forEach(([name, count]) => {
    if (!previousValue[name]) previousValue[name] = 0

    // @ts-ignore
    previousValue[name] += count
  })

  return previousValue
}

export default function useChecklist(): Recipe {
  const { value: armorSelections } = useArmorContext()
  const { value: itemSelections } = useItemContext()
  const recipeIngredients = useMemo(
    () =>
      armor
        .filter((a) => armorSelections[a.displayName] != Level.Ignored)
        .filter(isUpgradeable)
        .map((a) => ({
          ...a,
          upgrades: a.upgrades.slice(
            armorSelections[a.displayName] ?? Level.Base - 1
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
          (Object.entries(ingredientsData).find(
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
