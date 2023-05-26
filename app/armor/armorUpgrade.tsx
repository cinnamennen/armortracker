import { Armor } from "@/types/data"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArmorUpgradeButton } from "@/app/armor/armorUpgradeButton"

export function ArmorUpgrade({ armor }: { armor: Armor }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ArmorUpgradeButton armor={armor} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Upgrade armor and consume resources</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
