"use client"

import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import { selectItemByName, set } from "@/store/slices/items"
import { useAppDispatch, useAppSelector } from "@/store/store"

import { Input } from "@/components/ui/input"

export default function IngredientSelect({
  ingredient,
}: {
  ingredient: Ingredient
}) {
  const name = ingredientData[ingredient].displayName
  const dispatch = useAppDispatch()
  const value = useAppSelector((state) => selectItemByName(state, name))

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Input
        type="number"
        value={value}
        onChange={(event) =>
          dispatch(set({ item: name, level: Number(event.target.value) }))
        }
      />
    </div>
  )
}
