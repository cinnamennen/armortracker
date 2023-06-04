"use client"

import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"
import { selectNeededItemsByName } from "@/store/selectors"
import { selectItemByIngredient, selectItemByName } from "@/store/slices/items"
import { useAppSelector } from "@/store/store"

import { cn } from "@/lib/utils"
import { ZeldaImage } from "@/components/ZeldaImage"

export function ItemProgress({
  ingredient,
  aboveFold = false,
  hideName = false,
  total,
}: {
  ingredient: Ingredient
  aboveFold?: boolean
  hideName?: boolean
  total: number
}) {
  const value = useAppSelector((state) =>
    selectItemByIngredient(state, ingredient)
  )

  const percent = Math.max(Math.min(1, value / total), 0) * 100
  return (
    <div className="flex flex-col items-center">
      <CircularProgressbarWithChildren
        value={total > 0 ? percent : 100}
        styles={buildStyles({
          pathColor: "hsl(var(--primary))",
          trailColor: "hsl(var(--secondary))",
        })}
      >
        <ZeldaImage
          className="position-absolute h-2/3 w-2/3"
          displayName={ingredientData[ingredient].displayName}
          priority={aboveFold}
        />
      </CircularProgressbarWithChildren>
      {value} / {total}
      {!hideName && <p>{ingredientData[ingredient].displayName}</p>}
    </div>
  )
}
