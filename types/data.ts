import { Ingredients, armorGroup } from "@/data/enum"
import { RequireAtLeastOne } from "type-fest"

export enum Slot {
  Head,
  Body,
  Legs,
}

export enum Level {
  Base = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Ignored = -1,
}

export type Ingredient = { displayName: string; path?: string }

export type Recipe = RequireAtLeastOne<{ [key in Ingredients]?: number }>

interface BaseArmor {
  displayName: string
  slot: Slot
  path?: string
  sortKey?: string
}

export interface UpgradeableArmor extends BaseArmor {
  upgrades: UpgradeList
  armorGroup: armorGroup
}

interface StaticArmor extends BaseArmor {
  upgrades: null
}

export type Armor = UpgradeableArmor | StaticArmor
export type UpgradeList = [Recipe, Recipe, Recipe, Recipe]

export const isUpgradeable = (armor: Armor): armor is UpgradeableArmor =>
  armor.upgrades != null
