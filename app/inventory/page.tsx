import { Ingredients } from "@/data/enum"

import { isNotString } from "@/lib/utils"
import { IngredientCard } from "@/app/inventory/ingredientCard"

export default function IngredientDisplay() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.values(Ingredients)
        .filter(isNotString)
        .map((ingredient) => (
          <IngredientCard key={ingredient} ingredient={ingredient} />
        ))}
    </div>
  )
}
