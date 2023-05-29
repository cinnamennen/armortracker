import { useItem } from "@/context/ItemContext"
import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"
import { ZeldaImage } from "@/components/ZeldaImage"
import { ItemCollection } from "@/components/itemCollection"

export function ItemProgress({
  ingredient,
  need,
}: {
  ingredient: Ingredient
  need: number
}) {
  const { value } = useItem(ingredientData[ingredient].displayName)
  const percent = Math.max(Math.min(1, value / need), 0) * 100
  return (
    <div className="flex flex-col items-center">
      <CircularProgressbarWithChildren
        value={percent}
        styles={buildStyles({
          pathColor: "hsl(var(--primary))",
          trailColor: "hsl(var(--secondary))",
        })}
      >
        <ZeldaImage
          className="h-fit w-auto p-2"
          zelda={ingredientData[ingredient]}
        />
      </CircularProgressbarWithChildren>
      {value} / {need}
      <p>{ingredientData[ingredient].displayName}</p>
    </div>
  )
}
