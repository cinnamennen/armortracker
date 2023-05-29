import { useItem } from "@/context/ItemContext"
import { Ingredients } from "@/data/enum"
import { ingredientsData } from "@/data/ingredients"
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"
import Image from "next/image"

import { getDetectedPath } from "@/lib/utils"

export function ItemProgress({
  ingredient,
  need,
}: {
  ingredient: Ingredients
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
        <Image
          className="h-3/4 w-auto"
          src={getDetectedPath(ingredientsData[ingredient])}
          alt={"A picture of " + ingredientsData[ingredient].displayName}
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
        />
      </CircularProgressbarWithChildren>
      {value} / {need}
      <p>{ingredientsData[ingredient].displayName}</p>
    </div>
  )
}
