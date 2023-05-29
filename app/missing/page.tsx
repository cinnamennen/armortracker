"use client"

import { Ingredient } from "@/data/enum"
import { ingredientData } from "@/data/ingredients"

import { getDetectedPath } from "@/lib/utils"
import useChecklist from "@/components/useChecklist"

import { Missing, columns } from "./columns"
import { DataTable } from "./data-table"

export default function MissingItems() {
  const missingIngredients = useChecklist()
  const data = Object.entries(missingIngredients)
    .sort(([keya, vala], [keyb, valb]) => keya - keyb)
    .map(([key, val]) => ({
      name: ingredientData[key].displayName,
      amount: val as number,
      path: getDetectedPath(ingredientData[key]),
    })) satisfies Missing[]

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
