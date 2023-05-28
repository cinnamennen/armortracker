import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Armor, Ingredient, UpgradeableArmor } from "@/types/data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDetectedPath(
  item: { displayName: string; path?: string },
  directory: string
) {
  return directory + item.displayName + ".png"
}

export function getMaterialPath(ingredient: Ingredient) {
  return getDetectedPath(ingredient, "/images/")
}

export function getArmorPath(armor: Armor) {
  return getDetectedPath(armor, "/images/")
}

export function sortByKey(a: Armor, b: Armor) {
  if (!a.sortKey && !b.sortKey) return 0
  if (!a.sortKey) return 1
  if (!b.sortKey) return -1
  return a.sortKey.localeCompare(b.sortKey)
}

export function sortArmor(a: UpgradeableArmor, b: UpgradeableArmor) {
  return a.armorGroup - b.armorGroup || a.slot - b.slot || sortByKey(a, b)
}
