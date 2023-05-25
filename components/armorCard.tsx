import Image from "next/image"

import { Armor } from "@/types/data"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ArmorSelect from "@/app/armor/armorSelect"

export function ArmorCard({ armor }: { armor: Armor }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{armor.displayName}</CardTitle>
      </CardHeader>
      <CardContent className="grid place-content-center gap-4">
        <Image src={"/armor/" + armor.path} alt="me" width="200" height="200" />
      </CardContent>
      <CardFooter className="grid place-content-center gap-4">
        <ArmorSelect name={armor.displayName}/>
      </CardFooter>
    </Card>
  )
}
