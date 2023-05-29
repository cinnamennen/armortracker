import Image from "next/image"
import { useItem } from "@/context/ItemContext"
import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"
import { Plus } from "lucide-react"

import { getDetectedPath } from "@/lib/utils"

export function ItemCollection({ ingredient }: { ingredient: Ingredient }) {
  const { value, set } = useItem(ingredientData[ingredient].displayName)
  return (
      <div className="relative">
        <Image
          className="h-fit w-auto p-2"
          src={getDetectedPath(ingredientData[ingredient])}
          alt={"A picture of " + ingredientData[ingredient].displayName}
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity hover:opacity-80">
          <Plus
            className="h-3/4 w-auto"
            onClick={() =>
              set(ingredientData[ingredient].displayName, value + 1)
            }
          />
        </div>
    </div>
  )
}
