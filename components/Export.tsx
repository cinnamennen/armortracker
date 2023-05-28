"use client"

import * as React from "react"
import { useArmorContext } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import copy from "copy-to-clipboard"
import { Upload } from "lucide-react"

import { ListItem } from "@/components/list-item"

export default function Export() {
  const { value: armor } = useArmorContext()
  const { value: items } = useItemContext()
  return (
    <ListItem
      title="Export"
      Icon={Upload}
      onClick={() => {
        copy(btoa(JSON.stringify({ armor, items })), {
          format: "text/plain",
        })
      }}
    >
      Export your data to your clipboard so that you can load it anywhere.
    </ListItem>
  )
}
