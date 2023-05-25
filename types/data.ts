import { Ingredients } from "@/data/ingredients"

export enum Slot {
  Head,
  Body,
  Legs,
}

export enum Level {
  Base = "base",
  One = "one",
  Two = "two",
  Three = "three",
  Four = "four",
  Ignored = "ignored",
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
