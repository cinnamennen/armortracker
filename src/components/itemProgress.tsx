"use client"

import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"

import { selectItemByIngredient } from "@/store/slices/items"
import { useAppSelector } from "@/store/store"

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
          className="absolute size-2/3"
          displayName={ingredientData[ingredient].displayName}
          priority={aboveFold}
        />
      </CircularProgressbarWithChildren>
      {value} / {total}
      {!hideName && <p>{ingredientData[ingredient].displayName}</p>}
    </div>
  )
}
