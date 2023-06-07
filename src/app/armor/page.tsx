"use client"

import { armorGroup } from "@/data/enum"
import { selectCompact } from "@/store/slices/settings"
import { useAppSelector } from "@/store/store"

import { cn, isNotString } from "@/lib/utils"
import ArmorSection from "@/app/armor/armorSection"

export default function Armor() {
  const isCompact = useAppSelector(selectCompact)
  return (
    <div className={cn("grid", isCompact && "grid-cols-2 gap-4")}>
      {Object.values(armorGroup)
        .filter(isNotString)
        .map((group, index) => {
          return (
            <ArmorSection group={group} key={group} aboveFold={index <= 2} />
          )
        })}
    </div>
  )
}
