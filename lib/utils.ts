import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Armor, Ingredient } from "@/types/data"

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
