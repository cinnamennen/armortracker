import { armor, setData } from "@/data/armor"
import { armorGroup } from "@/data/enum"

import { isUpgradeable } from "@/types/data"
import { ArmorCard } from "@/app/armor/armorCard"
import {sortArmor} from "@/lib/utils";

export default function ArmorSection({ group }: { group: armorGroup }) {
  const upgradeableArmors = armor
    .filter(isUpgradeable)
    .filter((a) => a.armorGroup === group);
  upgradeableArmors.sort(sortArmor)
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-8">
        {setData[group].displayName}
      </h1>
      <div className="flex flex-wrap gap-4">
      {upgradeableArmors
        .map((a) => (
          <ArmorCard key={a.displayName} armor={a} />
        ))}</div>
    </div>
  )
}
