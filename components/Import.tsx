"use client"

import { useArmorContext } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import copy from "copy-to-clipboard"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Import() {
  const { load: loadArmor } = useArmorContext()
  const { load: loadItems } = useItemContext()
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className=""
            size="sm"
            onClick={() => {
              // log the users clipboard to the console
              navigator.clipboard.readText().then((clipText) => {
                const { armor, items } = JSON.parse(atob(clipText))
                loadArmor(armor)
                loadItems(items)
              })
            }}
          >
            <Download className="h-4 w-4" />
            <span className="sr-only">Import</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Load data from clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
