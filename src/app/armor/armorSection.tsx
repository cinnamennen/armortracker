"use client"

import { setData } from "@/data/armor"
import { ArmorGroup } from "@/data/enum"
import { selectRelevantArmor } from "@/store/selectors"
import { selectCompact } from "@/store/slices/settings"
import { useAppSelector } from "@/store/store"

import { cn } from "@/lib/utils"
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
  const isCompact = useAppSelector(selectCompact)

  if (upgradeableArmors.length === 0) return null
  return (
    <div className="mb-8">
      <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {setData[group].displayName}
      </h1>
      <div
        className={cn(
          "grid gap-3",
          isCompact
            ? "grid-cols-1 sm:grid-cols-2"
            : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {upgradeableArmors.map((a) => (
          <ArmorCard key={a.displayName} armor={a} aboveFold={aboveFold} />
        ))}
      </div>
    </div>
  )
}
