"use client"

import { selectArmorByName } from "@/store/slices/armor"
import { useAppSelector } from "@/store/store"

import { Armor } from "@/types/data"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArmorRemaining } from "@/components/ArmorRemaining"
import { ZeldaImage } from "@/components/ZeldaImage"
import { ArmorIgnore } from "@/app/armor/armorIgnore"
import ArmorSelect from "@/app/armor/armorSelect"
import { ArmorUpgrade } from "@/app/armor/armorUpgrade"

export function ArmorCard({ armor }: { armor: Armor }) {
  const value = useAppSelector((state) =>
    selectArmorByName(state, armor.displayName)
  )
  return (
    <Card className={cn(value?.ignored && "opacity-50", "transition-opacity")}>
      <CardHeader>
        <CardTitle>
          <div className={cn("flex items-center justify-between")}>
            {armor.displayName}
            <div className="flex flex-1 items-center justify-end space-x-2">
              <ArmorIgnore armor={armor} />
              <ArmorUpgrade armor={armor} />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <ZeldaImage className="h-52 w-auto" zelda={armor} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <ArmorSelect armor={armor} />
        <ArmorRemaining armor={armor} />
      </CardFooter>
    </Card>
  )
}
