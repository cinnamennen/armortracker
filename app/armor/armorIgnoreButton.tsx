"use client"

import { forwardRef } from "react"
import { useArmor } from "@/context/ArmorContext"
import { MinusCircle, PlusCircle } from "lucide-react"

import { Armor } from "@/types/data"
import { Button } from "@/components/ui/button"





const ArmorIgnoreButton = forwardRef<HTMLButtonElement, { armor: Armor }>(
  ({ armor, ...rest }, forwardedRef) => {
    const { value, toggleIgnore } = useArmor(armor.displayName)

    return (
      <Button
        {...rest}
        ref={forwardedRef}
        variant="outline"
        className="w-10 rounded-lg p-0"
        onClick={() => toggleIgnore(armor.displayName)}
      >
        {value?.ignored ? <PlusCircle className="h-4 w-4" /> : <MinusCircle className="h-4 w-4" />}

      </Button>
    )
  }
)
ArmorIgnoreButton.displayName = "ArmorIgnoreButton"
export { ArmorIgnoreButton }
