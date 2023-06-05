"use client"

import { Trash2 } from "lucide-react"

import { useClear } from "@/lib/hooks"
import { ListItem } from "@/components/list-item"

export default function Clear() {
  const clear = useClear()
  return (
    <ListItem title="Clear Data" Icon={Trash2} onClick={clear}>
      Reset all entered data.
    </ListItem>
  )
}
