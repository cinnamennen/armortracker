import { armor } from "@/data/armor"

import { ArmorCard } from "@/app/armor/armorCard"

export default function Armor() {
  return (
    <div className="flex flex-wrap gap-4">
      {armor
        .filter((a) => a.upgrades != null)
        .map((a) => (
          <ArmorCard key={a.displayName} armor={a} />
        ))}
    </div>
  )
}
