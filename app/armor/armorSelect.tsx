"use client"

import { useEffect } from "react"
import { useArmor, useArmorContext } from "@/context/ArmorContext"
import { Star } from "lucide-react"

import { Level } from "@/types/data"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ArmorSelect({ name }: { name: string }) {
  const { value, set } = useArmor(name)

  // useEffect(() => {
  //   if (value == undefined) set(name, Level.Base)
  // }, [name, value, set])

  const star = <Star size="1em" />
  return (
    <Tabs
      value={value?.level.toString()}
      onValueChange={(value) => {
        console.log("value changed to", value)
        set(name, Number(value))
      }}
    >
      <TabsList>
        {/*<TabsTrigger value={Level.Ignored.toString()}>Ignored</TabsTrigger>*/}
        <TabsTrigger value={Level.Base.toString()}>Base</TabsTrigger>
        <TabsTrigger value={Level.One.toString()}>{star}</TabsTrigger>
        <TabsTrigger value={Level.Two.toString()}>
          {star}
          {star}
        </TabsTrigger>
        <TabsTrigger value={Level.Three.toString()}>
          {star}
          {star}
          {star}
        </TabsTrigger>
        <TabsTrigger value={Level.Four.toString()}>
          {star}
          {star}
          {star}
          {star}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
