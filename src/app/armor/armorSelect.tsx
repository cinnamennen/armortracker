"use client"

import { selectArmorByName, set } from "@/store/slices/armor"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { Star } from "lucide-react"

import { Armor, Level } from "@/types/data"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ArmorSelect({ armor }: { armor: Armor }) {
  const value = useAppSelector((state) =>
    selectArmorByName(state, armor.displayName)
  )
  const dispatch = useAppDispatch()

  const star = <Star size="1em" />
  return (
    <Tabs
      value={value?.level.toString()}
      onValueChange={(value) => {
        dispatch(set({ armor: armor.displayName, level: Number(value) }))
      }}
    >
      <TabsList>
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
