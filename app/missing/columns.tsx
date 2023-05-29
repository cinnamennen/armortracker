"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

import { ZeldaImage } from "@/components/ZeldaImage"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Missing = {
  name: string
  path: string
  amount: number
}

const columnHelper = createColumnHelper<Missing>()

export const columns = [
  columnHelper.display({
    id: "path",
    cell: (props) => (
      <ZeldaImage
        className="h-52 w-auto"
        zelda={{
          path: props.row.original.path,
          displayName: props.row.original.name,
        }}
      />
    ),
  }),
  columnHelper.accessor("name", { header: "Item" }),
  columnHelper.accessor("amount", { header: "Amount to Gather" }),
] satisfies ColumnDef<Missing, any>[]
