"use client"

import { setData } from "@/data/armor"
import { ArmorGroup } from "@/data/enum"
import { selectRelevantArmor } from "@/store/selectors"
import { useAppSelector } from "@/store/store"

import { ArmorCard } from "@/app/armor/armorCard"

export default function ArmorSection({
  group,
  aboveFold = false,
}: {
  group: ArmorGroup
  aboveFold?: boolean
}) {
  const upgradeableArmors = useAppSelector((state) =>
    selectRelevantArmor(state, group)
  )
  if (upgradeableArmors.length === 0) return null
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
