import Image from "next/image"

import { Ingredient } from "@/types/data"
import { getDetectedPath } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IngredientSelect from "@/app/inventory/ingredientSelect"

export function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ingredient.displayName}</CardTitle>
      </CardHeader>
      <CardContent className="grid place-content-center gap-4">
        <Image
          src={getDetectedPath(ingredient)}
          alt={"A picture of " + ingredient.displayName}
          width="100"
          height="100"
          quality={100}
        />
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <IngredientSelect name={ingredient.displayName} />
      </CardFooter>
    </Card>
  )
}
