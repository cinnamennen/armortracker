import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ZeldaImage } from "@/components/ZeldaImage"
import IngredientSelect from "@/app/inventory/ingredientSelect"

export function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ingredientData[ingredient].displayName}</CardTitle>
      </CardHeader>
      <CardContent className="grid place-content-center gap-4">
        <ZeldaImage
          className="h-52 w-auto"
          zelda={ingredientData[ingredient]}
        />
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <IngredientSelect name={ingredientData[ingredient].displayName} />
      </CardFooter>
    </Card>
  )
}
