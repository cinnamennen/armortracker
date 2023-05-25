"use client"

import { useLocalStorageValue } from "@react-hookz/web"

import { Input } from "@/components/ui/input"

export default function IngredientSelect({ name }: { name: string }) {
  const { value, set } = useLocalStorageValue(name, {
    defaultValue: 0,
    initializeWithValue: false,
  })

  const parsedValue = Number(value) || 0

  return (
    <Input
      type="number"
      value={parsedValue}
      onChange={(event) => set(Number(event.target.value))}
    />
  )
}
