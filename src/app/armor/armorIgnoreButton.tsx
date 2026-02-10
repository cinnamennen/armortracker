"use client"

import { forwardRef } from "react"
import { selectArmorByName, toggleIgnore } from "@/store/slices/armor"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { MinusCircle, PlusCircle } from "lucide-react"

import { Armor } from "@/types/data"
import { Button } from "@/components/ui/button"

const ArmorIgnoreButton = forwardRef<HTMLButtonElement, { armor: Armor }>(
  ({ armor, ...rest }, forwardedRef) => {
    const value = useAppSelector((state) =>
      selectArmorByName(state, armor.displayName)
    )
    const dispatch = useAppDispatch()

    return (
      <Button
        {...rest}
        ref={forwardedRef}
        variant="outline"
        className="w-10 rounded-lg p-0"
        onClick={() => dispatch(toggleIgnore(armor.displayName))}
      >
        {value?.ignored ? (
          <PlusCircle className="size-4" />
        ) : (
          <MinusCircle className="size-4" />
        )}
      </Button>
    )
  }
)
ArmorIgnoreButton.displayName = "ArmorIgnoreButton"
export { ArmorIgnoreButton }
