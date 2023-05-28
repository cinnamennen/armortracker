"use client"

import { forwardRef, useCallback, useMemo } from "react"
import { useArmor } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import { ChevronsUp } from "lucide-react"

import { Armor, Level } from "@/types/data"
import { Button } from "@/components/ui/button"

const ArmorUpgradeButton = forwardRef(
  ({ armor, ...rest }: { armor: Armor }, forwardedRef) => {
    const { value, upgrade } = useArmor(armor.displayName)
    const { consume } = useItemContext()

    const doUpgrade = useCallback(() => {
      if (armor.upgrades == null) return
      upgrade(armor.displayName)
      const upgradeCost = armor.upgrades[value ?? Level.Base]
      if (upgradeCost == null) return
      consume(upgradeCost)
    }, [armor.displayName, armor.upgrades, consume, upgrade, value])

    const disabled = useMemo(
      () => value === Level.Four || armor.upgrades == null,
      [value, armor.upgrades]
    )
    return (
      <Button
        {...rest}
        // @ts-ignore
        ref={forwardedRef}
        disabled={disabled}
        variant="outline"
        className="w-10 rounded-full p-0"
        onClick={() => doUpgrade()}
      >
        <ChevronsUp className="h-4 w-4" />
      </Button>
    )
  }
)
ArmorUpgradeButton.displayName = "ArmorUpgradeButton"
export { ArmorUpgradeButton }
