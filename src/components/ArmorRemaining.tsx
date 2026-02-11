import { selectNextUpgradeByArmorName } from "@/store/slices/armor"
import { selectCompact } from "@/store/slices/settings"
import { useAppSelector } from "@/store/store"

import { Armor } from "@/types/data"
import { cn } from "@/lib/utils"
import { ItemProgress } from "@/components/itemProgress"

export function ArmorRemaining({
  armor,
  aboveFold = false,
}: {
  armor: Armor
  aboveFold?: boolean
}) {
  const nextUpgrade = useAppSelector((state) =>
    selectNextUpgradeByArmorName(state, armor.displayName)
  )
  const isCompact = useAppSelector(selectCompact)

  return (
    <div
      className={cn("grid gap-6", isCompact ? "grid-cols-2" : "grid-cols-3")}
    >
      {Object.entries(nextUpgrade).map(([ingredient, count]) => {
        return (
          <ItemProgress
            key={ingredient}
            ingredient={ingredient}
            aboveFold={aboveFold}
            total={count ?? 0}
          />
        )
      })}
    </div>
  )
}
