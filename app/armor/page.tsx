import { armor, setData } from "@/data/armor"
import { armorGroup } from "@/data/enum"

import { isUpgradeable } from "@/types/data"
import { sortArmor } from "@/lib/utils"
import { ArmorCard } from "@/app/armor/armorCard"
import ArmorSection from "@/app/armor/armorSection"

export default function Armor() {
  return (
    <div>
      {Object.values(armorGroup)
        .filter(isAG)
        .map((group) => {
          return <ArmorSection group={group} key={group} />
        })}
      {/*{upgradeableArmors.map((a) => (*/}
      {/*  <ArmorCard key={a.displayName} armor={a} />*/}
      {/*))}*/}
    </div>
  )

  function isAG(x: string | armorGroup): x is armorGroup {
    return typeof x !== "string"
  }
}
