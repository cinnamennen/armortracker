"use client"
import Image from "next/image"

import { Armor } from "@/types/data"
import {cn, getArmorPath} from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArmorIgnore } from "@/app/armor/armorIgnore"
import ArmorSelect from "@/app/armor/armorSelect"
import { ArmorUpgrade } from "@/app/armor/armorUpgrade"
import {useArmor} from "@/context/ArmorContext";

export function ArmorCard({ armor }: { armor: Armor }) {
  const {value} = useArmor(armor.displayName)
  return (
    <Card className={cn(value?.ignored && "opacity-50", "transition-opacity")}>
      <CardHeader>
        <CardTitle>
          {/*Align the items to the left and right corner*/}
          <div className={cn("flex items-center justify-between", )}>
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
          <Image
            className="h-52 w-auto"
            src={getArmorPath(armor)}
            alt={"A picture of " + armor.displayName}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <ArmorSelect name={armor.displayName} />
      </CardFooter>
    </Card>
  )
}
