import { selectNextUpgradeByArmorName } from "@/store/slices/armor"
import { useAppSelector } from "@/store/store"

import { Armor } from "@/types/data"
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

  return (
    <div className="grid grid-cols-3 gap-6">
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
