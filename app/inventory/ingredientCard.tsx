import Image from "next/image"
import { Ingredients } from "@/data/enum"
import { ingredientsData } from "@/data/ingredients"

import { getDetectedPath } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IngredientSelect from "@/app/inventory/ingredientSelect"

export function IngredientCard({ ingredient }: { ingredient: Ingredients }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ingredientsData[ingredient].displayName}</CardTitle>
      </CardHeader>
      <CardContent className="grid place-content-center gap-4">
        <Image
          className="h-52 w-auto"
          src={getDetectedPath(ingredientsData[ingredient])}
          alt={"A picture of " + ingredientsData[ingredient].displayName}
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
        />
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <IngredientSelect name={ingredientsData[ingredient].displayName} />
      </CardFooter>
    </Card>
  )
}
