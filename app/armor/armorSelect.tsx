"use client"

import { useArmor } from "@/context/ArmorContext"
import { Star } from "lucide-react"

import { Level } from "@/types/data"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ArmorSelect({ name }: { name: string }) {
  const { value, set } = useArmor(name)
  return (
    <Tabs
      value={value?.toString()}
      onValueChange={(value) => set(name, Number(value))}
      className="grid w-[400px] place-content-center gap-4"
    >
      <TabsList>
        <TabsTrigger value={Level.Ignored.toString()}>Ignored</TabsTrigger>
        <TabsTrigger value={Level.Base.toString()}>Base</TabsTrigger>
        <TabsTrigger value={Level.One.toString()}>
          <Star size={14} />
        </TabsTrigger>
        <TabsTrigger value={Level.Two.toString()}>
          <Star size={14} />
          <Star size={14} />
        </TabsTrigger>
        <TabsTrigger value={Level.Three.toString()}>
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
        </TabsTrigger>
        <TabsTrigger value={Level.Four.toString()}>
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
