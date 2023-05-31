import { Ingredient } from "@/data/enum"

import { isNotString } from "@/lib/utils"
import { IngredientCard } from "@/app/inventory/ingredientCard"

export default function IngredientDisplay() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.values(Ingredient)
        .filter(isNotString)
        .map((ingredient, index) => (
          <IngredientCard
            key={ingredient}
            ingredient={ingredient}
            aboveFold={index <= 5}
          />
        ))}
    </div>
  )
}
