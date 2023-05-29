import { armorGroup } from "@/data/enum"

import ArmorSection from "@/app/armor/armorSection"
import {isNotString} from "@/lib/utils";

export default function Armor() {
  return (
    <>
      {Object.values(armorGroup)
        .filter(isNotString)
        .map((group) => {
          return <ArmorSection group={group} key={group} />
        })}
    </>
  )
}
