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
  padding = 2,
}: {
  ingredient: Ingredient
  aboveFold?: boolean
  hideName?: boolean
  padding?: number
}) {
  const value = useAppSelector((state) =>
    selectItemByIngredient(state, ingredient)
  )
  const need = useAppSelector((state) =>
    selectNeededItemsByName(state, ingredient)
  )
  const percent = Math.max(Math.min(1, value / need), 0) * 100
  return (
    <div className="flex flex-col items-center">
      <CircularProgressbarWithChildren
        value={percent}
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
      {value} / {need}
      {!hideName && <p>{ingredientData[ingredient].displayName}</p>}
    </div>
  )
}
