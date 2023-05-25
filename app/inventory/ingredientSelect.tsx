"use client"

import { useItem } from "@/context/ItemContext"

import { Input } from "@/components/ui/input"

export default function IngredientSelect({ name }: { name: string }) {
  const { value, set } = useItem(name)

  const parsedValue = Number(value) || 0

  return (
    <Input
      type="number"
      value={parsedValue}
      onChange={(event) => set(name, Number(event.target.value))}
    />
  )
}
