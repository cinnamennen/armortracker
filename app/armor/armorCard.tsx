import Image from "next/image"

import { Armor } from "@/types/data"
import { getArmorPath } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ArmorSelect from "@/app/armor/armorSelect"
import { ArmorUpgrade } from "@/app/armor/armorUpgrade"

export function ArmorCard({ armor }: { armor: Armor }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {/*Align the items to the left and right corner*/}
          <div className="flex items-center justify-between">
            {armor.displayName}
            <ArmorUpgrade armor={armor} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid place-content-center gap-4">
        <Image
          src={getArmorPath(armor)}
          alt={"A picture of " + armor.displayName}
          width="200"
          height="200"
        />
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <ArmorSelect name={armor.displayName} />
      </CardFooter>
    </Card>
  )
}
