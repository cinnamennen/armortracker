import { armorGroup } from "@/data/enum"

import { isNotString } from "@/lib/utils"
import ArmorSection from "@/app/armor/armorSection"

export default function Armor() {
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
