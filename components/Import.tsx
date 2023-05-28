"use client"

import * as React from "react"
import { useArmorContext } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import copy from "copy-to-clipboard"
import { Download, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ListItem } from "@/components/list-item"

export default function Import() {
  const { load: loadArmor } = useArmorContext()
  const { load: loadItems } = useItemContext()
  return (
    <ListItem
      title="Import"
      Icon={Download}
      onClick={() => {
        // log the users clipboard to the console
        navigator.clipboard.readText().then((clipText) => {
          const { armor, items } = JSON.parse(atob(clipText))
          loadArmor(armor)
          loadItems(items)
        })
      }}
    >
      Import your armor and inventory data from your clipboard.
    </ListItem>
  )
}
