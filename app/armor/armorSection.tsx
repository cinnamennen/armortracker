import { armor, setData } from "@/data/armor"
import { armorGroup } from "@/data/enum"

import { isUpgradeable } from "@/types/data"
import { sortArmor } from "@/lib/utils"
import { ArmorCard } from "@/app/armor/armorCard"

export default function ArmorSection({
  group,
  aboveFold = false,
}: {
  group: armorGroup
  aboveFold?: boolean
}) {
  const upgradeableArmors = armor
    .filter(isUpgradeable)
    .filter((a) => a.armorGroup === group)
  upgradeableArmors.sort(sortArmor)
  return (
    <div className="mb-8">
      <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight  lg:text-5xl">
        {setData[group].displayName}
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {upgradeableArmors.map((a) => (
          <ArmorCard key={a.displayName} armor={a} aboveFold={aboveFold} />
        ))}
      </div>
    </div>
  )
}
