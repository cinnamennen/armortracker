"use client"

import { selectRelevantIngredients } from "@/store/selectors"
import { useAppSelector } from "@/store/store"

import { IngredientCard } from "@/app/inventory/ingredientCard"

export default function IngredientDisplay() {
  const ingredients = useAppSelector(selectRelevantIngredients)
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-6">
      {ingredients.map((ingredient, index) => (
        <IngredientCard
          key={ingredient}
          ingredient={ingredient}
          aboveFold={index <= 30}
        />
      ))}
    </div>
  )
}
