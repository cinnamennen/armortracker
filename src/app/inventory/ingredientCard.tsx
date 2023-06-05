"use client"

import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import { selectNeededIngredientsByName } from "@/store/selectors"
import { useAppSelector } from "@/store/store"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ItemProgress } from "@/components/itemProgress"
import IngredientSelect from "@/app/inventory/ingredientSelect"

export function IngredientCard({
  ingredient,
  aboveFold = false,
}: {
  ingredient: Ingredient
  aboveFold?: boolean
}) {
  const need = useAppSelector((state) =>
    selectNeededIngredientsByName(state, ingredient)
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>{ingredientData[ingredient].displayName}</CardTitle>
      </CardHeader>
      <CardContent className="grid place-content-center gap-4">
        <ItemProgress
          ingredient={ingredient}
          hideName
          aboveFold={aboveFold}
          total={need}
        />
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <IngredientSelect ingredient={ingredient} />
      </CardFooter>
    </Card>
  )
}
