import { useMemo } from "react"
import { useArmor } from "@/context/ArmorContext"

import { Armor, Level, Recipe, UpgradeList } from "@/types/data"
import { ItemProgress } from "@/components/itemProgress"

export function ArmorRemaining({ armor }: { armor: Armor }) {
  const { value } = useArmor(armor.displayName)
  const val: Partial<Recipe> = useMemo(() => {
    if (armor.upgrades == null) return {}
    return armor.upgrades[value?.level ?? Level.Base] ?? {}
  }, [armor, value])

  return (
    <div className="grid grid-cols-3 gap-6">
      {Object.entries(val).map(([ingredient, count]) => {
        return (
          <ItemProgress
            key={ingredient}
            ingredient={ingredient}
            need={count ?? 0}
          />
        )
      })}
    </div>
  )
}
