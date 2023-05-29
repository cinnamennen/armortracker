import { useItem } from "@/context/ItemContext"
import { Ingredient } from "@/data/enum"
import { ingredientsData } from "@/data/ingredients"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"
import { ItemCollection } from "@/components/itemCollection"

export function ItemProgress({
  ingredient,
  need,
}: {
  ingredient: Ingredient
  need: number
}) {
  const { value } = useItem(ingredientsData[ingredient].displayName)
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
        <ItemCollection ingredient={ingredient} />
      </CircularProgressbarWithChildren>
      {value} / {need}
      <p>{ingredientsData[ingredient].displayName}</p>
    </div>
  )
}
