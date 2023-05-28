import { armorGroup } from "@/data/enum"

import ArmorSection from "@/app/armor/armorSection"

export default function Armor() {
  return (
    <div>
      {Object.values(armorGroup)
        .filter(isAG)
        .map((group) => {
          return <ArmorSection group={group} key={group} />
        })}
    </div>
  )

  function isAG(x: string | armorGroup): x is armorGroup {
    return typeof x !== "string"
  }
}
