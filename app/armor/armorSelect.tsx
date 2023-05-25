"use client"

import { useLocalStorageValue } from "@react-hookz/web"
import { Star } from "lucide-react"

import { Level } from "@/types/data"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ArmorSelect({ name }: { name: string }) {
  const { value, set } = useLocalStorageValue(name, {
    defaultValue: Level.Ignored,
    initializeWithValue: false,
  })
  return (
    <Tabs
      value={value}
      onValueChange={(value) => set(value as Level)}
      className="grid w-[400px] place-content-center gap-4"
    >
      <TabsList>
        <TabsTrigger value={Level.Ignored}>Ignored</TabsTrigger>
        <TabsTrigger value={Level.Base}>Base</TabsTrigger>
        <TabsTrigger value={Level.One}>
          <Star size={14} />
        </TabsTrigger>
        <TabsTrigger value={Level.Two}>
          <Star size={14} />
          <Star size={14} />
        </TabsTrigger>
        <TabsTrigger value={Level.Three}>
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
        </TabsTrigger>
        <TabsTrigger value={Level.Four}>
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
