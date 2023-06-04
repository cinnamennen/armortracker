"use client"

import { forwardRef, useCallback } from "react"
import {
  selectArmorByName,
  selectArmorIsUpgradable,
  upgrade,
} from "@/store/slices/armor"
import { consume } from "@/store/slices/items"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { ChevronsUp } from "lucide-react"

import { Armor, Level } from "@/types/data"
import { Button } from "@/components/ui/button"

const ArmorUpgradeButton = forwardRef<HTMLButtonElement, { armor: Armor }>(
  ({ armor, ...rest }, forwardedRef) => {
    const value = useAppSelector((state) =>
      selectArmorByName(state, armor.displayName)
    )
    const dispatch = useAppDispatch()

    const isUpgradable = useAppSelector((state) =>
      selectArmorIsUpgradable(state, armor.displayName)
    )

    const doUpgrade = useCallback(() => {
      // Todo: define elsewhere
      dispatch(upgrade(armor.displayName))
      const upgradeCost =
        armor.upgrades && armor.upgrades[value?.level ?? Level.Base]
      if (upgradeCost == null) return
      console.log("consuming", upgradeCost)
      dispatch(consume(upgradeCost))
      consume(upgradeCost)
    }, [armor.displayName, armor.upgrades, dispatch, value?.level])

    return (
      <Button
        {...rest}
        ref={forwardedRef}
        disabled={!isUpgradable}
        variant="outline"
        className="w-10 rounded-lg p-0"
        onClick={() => doUpgrade()}
      >
        <ChevronsUp className="h-4 w-4" />
      </Button>
    )
  }
)
ArmorUpgradeButton.displayName = "ArmorUpgradeButton"
export { ArmorUpgradeButton }
