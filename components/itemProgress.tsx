import { useItem } from "@/context/ItemContext"
import { Ingredients } from "@/data/enum"
import { ingredientsData } from "@/data/ingredients"
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import {getDetectedPath} from "@/lib/utils";
import Image from "next/image";


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
      <CircularProgressbarWithChildren value={percent}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
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
