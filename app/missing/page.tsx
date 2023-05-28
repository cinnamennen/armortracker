"use client"

import { ingredientsData } from "@/data/ingredients"

import { getMaterialPath } from "@/lib/utils"
import useChecklist from "@/components/useChecklist"

import { Missing, columns } from "./columns"
import { DataTable } from "./data-table"

export default function MissingItems() {
  const foo = useChecklist()
  const data = Object.entries(foo).map(([key, val]) => ({
    name: ingredientsData[key].displayName,
    amount: val as number,
    path: getMaterialPath(ingredientsData[key]),
  })) satisfies Missing[]

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
