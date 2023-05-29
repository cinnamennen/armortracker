"use client"

import * as React from "react"
import { Download } from "lucide-react"

import { useImport } from "@/lib/hooks"
import { ListItem } from "@/components/list-item"

export default function Import() {
  const load = useImport()
  return (
    <ListItem title="Import" Icon={Download} onClick={load}>
      Import your armor and inventory data from your clipboard.
    </ListItem>
  )
}
