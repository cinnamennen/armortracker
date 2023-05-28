"use client"

import { forwardRef, useCallback, useMemo } from "react"
import { useArmor } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import { MinusCircle } from "lucide-react"

import { Armor, Level } from "@/types/data"
import { Button } from "@/components/ui/button"

const ArmorIgnoreButton = forwardRef<HTMLButtonElement, { armor: Armor }>(
  ({ armor }, forwardedRef) => {
    const { value, toggleIgnore } = useArmor(armor.displayName)

    return (
      <Button
        ref={forwardedRef}
        variant="outline"
        className="w-10 rounded-lg p-0"
        onClick={() => toggleIgnore(armor.displayName)}
      >
        <MinusCircle className="h-4 w-4" />
      </Button>
    )
  }
)
ArmorIgnoreButton.displayName = "ArmorIgnoreButton"
export { ArmorIgnoreButton }
