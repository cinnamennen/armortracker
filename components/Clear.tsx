"use client"

import * as React from "react"
import { useArmorContext } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import { Trash2 } from "lucide-react"

import { ListItem } from "@/components/list-item"

export default function Clear() {
  const { clear: itemClear } = useItemContext()
  const { clear: armorClear } = useArmorContext()
  return (
    <ListItem
      title="Clear Data"
      Icon={Trash2}
      onClick={() => {
        itemClear()
        armorClear()
      }}
    >
      Reset all entered data.
    </ListItem>
  )
}
