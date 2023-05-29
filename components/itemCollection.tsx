import Image from "next/image"
import { Ingredient } from "@/data/enum"

import { getDetectedPath } from "@/lib/utils"
import {ingredientsData} from "@/data/ingredients";

export function ItemCollection({ ingredient }: { ingredient: Ingredient }) {
  return (
    <div>
      <Image
        className="h-3/4 w-auto"
        src={getDetectedPath(ingredientsData[ingredient])}
        alt={"A picture of " + ingredientsData[ingredient].displayName}
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
      />
    </div>
  )
}
