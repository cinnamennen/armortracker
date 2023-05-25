import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Ingredient } from "@/types/data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMaterialPath(ingredient: Ingredient) {
  return (
    "/materials/" +
    (ingredient.path ??
      ingredient.displayName.toLowerCase().replaceAll(" ", "_") + ".png")
  )
}
