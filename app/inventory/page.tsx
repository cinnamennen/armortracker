import { Ingredient } from "@/data/enum"

import { isNotString } from "@/lib/utils"
import { IngredientCard } from "@/app/inventory/ingredientCard"

export default function IngredientDisplay() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-6">
      {Object.values(Ingredient)
        .filter(isNotString)
        .map((ingredient, index) => (
          <IngredientCard
            key={ingredient}
            ingredient={ingredient}
            aboveFold={index <= 30}
          />
        ))}
    </div>
  )
}
