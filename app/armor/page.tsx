import { armor } from "@/data/armor"

import { isUpgradeable } from "@/types/data"
import { sortArmor } from "@/lib/utils"
import { ArmorCard } from "@/app/armor/armorCard"

export default function Armor() {
  const upgradeableArmors = armor.filter(isUpgradeable)
  upgradeableArmors.sort(sortArmor)
  return (
    <div className="flex flex-wrap gap-4">
      {upgradeableArmors.map((a) => (
        <ArmorCard key={a.displayName} armor={a} />
      ))}
    </div>
  )
}
