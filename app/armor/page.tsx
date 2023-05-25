import { armor } from "@/data/armor"

import { ArmorCard } from "@/components/armorCard"

export default function Armor() {
  return (
    <div className="flex flex-wrap gap-4">
      {armor.map((a) => (
        <ArmorCard key={a.displayName} armor={a} />
      ))}
    </div>
  )
}
