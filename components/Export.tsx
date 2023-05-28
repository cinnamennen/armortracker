"use client"

import { useArmorContext } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import copy from "copy-to-clipboard"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Export() {
  const { value: armor } = useArmorContext()
  const { value: items } = useItemContext()
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className=""
            size="sm"
            onClick={() => {
              copy(btoa(JSON.stringify({ armor, items })), {format: "text/plain"})
            }}
          >
            <Upload className="h-4 w-4" />
            <span className="sr-only">Export</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Export data to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
