import { Ingredients } from "@/data/ingredients"

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
export type Recipe = { [key in Ingredients]?: number }
export type Armor = {
  displayName: string
  slot: Slot
  upgrades: UpgradeList | null
  path: string
}
export type UpgradeList = [Recipe, Recipe, Recipe, Recipe]
