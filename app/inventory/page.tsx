import { ingredientsData } from "@/data/ingredients"

import { IngredientCard } from "@/app/inventory/ingredientCard"

export default function Ingredients() {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.values(ingredientsData).map((ingredient) => (
        <IngredientCard key={ingredient.displayName} ingredient={ingredient} />
      ))}
    </div>
  )
}
