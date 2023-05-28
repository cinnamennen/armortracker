import { Armor } from "@/types/data"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArmorIgnoreButton } from "@/app/armor/armorIgnoreButton"

export function ArmorIgnore({ armor }: { armor: Armor }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <ArmorIgnoreButton armor={armor} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Ignore this armor when calculating missing items</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
