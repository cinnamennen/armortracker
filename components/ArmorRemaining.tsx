import { useMemo } from "react"
import { selectArmorByName } from "@/store/slices/armor"
import { useAppSelector } from "@/store/store"

import { Armor, Level, Recipe } from "@/types/data"
import { ItemProgress } from "@/components/itemProgress"

export function ArmorRemaining({ armor }: { armor: Armor }) {
  const value = useAppSelector((state) =>
    selectArmorByName(state, armor.displayName)
  )
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
