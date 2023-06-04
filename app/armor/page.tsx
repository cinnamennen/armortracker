import { Ingredient, armorGroup } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"

import { isNotString } from "@/lib/utils"
import ArmorSection from "@/app/armor/armorSection"

export default function Armor() {
  Object.values(Ingredient)
    .filter(isNotString)
    .forEach((x) =>
      console.log(Ingredient[x] + " = " + `"${ingredientData[x].displayName}",`)
    )
  return (
    <>
      {Object.values(armorGroup)
        .filter(isNotString)
        .map((group, index) => {
          return (
            <ArmorSection group={group} key={group} aboveFold={index <= 2} />
          )
        })}
    </>
  )
}
