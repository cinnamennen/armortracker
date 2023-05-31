"use client"

import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import { selectNeededItems } from "@/store/selectors"
import { selectItemByName, set } from "@/store/slices/items"
import { useAppDispatch, useAppSelector } from "@/store/store"

import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function IngredientSelect({
  ingredient,
}: {
  ingredient: Ingredient
}) {
  const name = ingredientData[ingredient].displayName
  const dispatch = useAppDispatch()
  const value = useAppSelector((state) => selectItemByName(state, name))
  const needed = useAppSelector(selectNeededItems)[ingredient]

  const percentage = needed ? Math.round((value / (needed + value)) * 100) : 100

  return (
    <div className="flex flex-col items-center justify-center">
      <Input
        className="mb-4"
        type="number"
        value={value}
        onChange={(event) =>
          dispatch(set({ item: name, level: Number(event.target.value) }))
        }
      />
      <Progress value={percentage} />
    </div>
  )
}
