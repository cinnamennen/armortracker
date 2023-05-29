"use client"

import { Upload } from "lucide-react"

import { useExport } from "@/lib/hooks"
import { ListItem } from "@/components/list-item"

export default function Export() {
  const out = useExport()
  return (
    <ListItem title="Export" Icon={Upload} onClick={out}>
      Export your data to your clipboard so that you can load it anywhere.
    </ListItem>
  )
}
