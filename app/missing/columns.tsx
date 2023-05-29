"use client"

import Image from "next/image"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

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
      <Image
        src={props.row.original.path}
        alt={"A picture of " + props.row.original.name}
        width="100"
        height="100"
        quality={100}
      />
    ),
  }),
  columnHelper.accessor("name", { header: "Item" }),
  columnHelper.accessor("amount", { header: "Amount to Gather" }),
] satisfies ColumnDef<Missing, any>[]
