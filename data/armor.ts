import { Ingredients } from "@/data/ingredients"

import { Armor, Slot, UpgradeList } from "@/types/data"

const sharedUpgrades = {
  zora: [
    { [Ingredients.LizalfosHorn]: 3 },
    { [Ingredients.LizalfosTalon]: 5, [Ingredients.HyruleBass]: 5 },
    {
      [Ingredients.BlueLizalfosHorn]: 5,
      [Ingredients.LizalfosTail]: 3,
      [Ingredients.HeartyBass]: 3,
    },
    {
      [Ingredients.BlackLizalfosHorn]: 5,
      [Ingredients.BlueLizalfosTail]: 5,
      [Ingredients.Opal]: 20,
    },
  ],
} satisfies { [key: string]: UpgradeList }

export const armor: Armor[] = [
  {
    displayName: "Zora Armor",
    slot: Slot.Head,
    upgrades: sharedUpgrades.zora,
    path: "zora_armor.png",
  },
  {
    displayName: "Zora Greaves",
    slot: Slot.Body,
    upgrades: sharedUpgrades.zora,
    path: "zora_greaves.png",
  },
  {
    displayName: "Zora Helm",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.zora,
    path: "zora_helm.png",
  },
]
