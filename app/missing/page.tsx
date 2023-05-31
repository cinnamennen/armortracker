"use client"

import { ingredientData } from "@/data/ingredients"
import { selectNeededItems } from "@/store/selectors"
import { useAppSelector } from "@/store/store"

import { getDetectedPath } from "@/lib/utils"

import { Missing, columns } from "./columns"
import { DataTable } from "./data-table"

export default function MissingItems() {
  const missingIngredients = useAppSelector(selectNeededItems)
  const data = Object.entries(missingIngredients)
    .sort(([keya], [keyb]) => keya - keyb)
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
