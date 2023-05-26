"use client"

import { useArmor } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import { CornerRightUp } from "lucide-react"

import { Armor, Level } from "@/types/data"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ArmorUpgrade({ armor }: { armor: Armor }) {
  const { value, upgrade } = useArmor(armor.displayName)
  const { consume } = useItemContext()
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={value === Level.Four || armor.upgrades == null}
            variant="outline"
            className="w-10 rounded-full p-0"
            onClick={() => {
              if (armor.upgrades== null) return;
              upgrade(armor.displayName)
              const upgradeCost = armor.upgrades[value ?? Level.Base];
              if (upgradeCost == null) return;
              consume(upgradeCost)
            }}
          >
            <CornerRightUp className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Upgrade armor and consume resources</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
