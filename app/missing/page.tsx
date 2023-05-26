"use client"

import {ingredientsData} from "@/data/ingredients"
import useChecklist from "@/components/useChecklist"

import {columns, Missing} from "./columns"
import {DataTable} from "./data-table"
import {getMaterialPath} from "@/lib/utils";


export default function Missing() {
  const foo = useChecklist()
  const data = Object.entries(foo).map(([key, val]) => ({
    name: ingredientsData[key].displayName, amount: val as number, path: getMaterialPath(ingredientsData[key])
  })) satisfies Missing[]

  console.log(data)
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
