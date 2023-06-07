"use client"

import { selectDense } from "@/store/slices/settings"
import { useAppSelector } from "@/store/store"
import { Eye, EyeOff } from "lucide-react"

import { useDense } from "@/lib/hooks"
import { ListItem } from "@/components/list-item"

export default function Dense() {
  const dense = useDense()
  const isDense = useAppSelector(selectDense)
  if (!isDense) {
    return (
      <ListItem title="Hide Complete" Icon={EyeOff} onClick={dense}>
        Hide armor that is fully upgraded and items that are not needed.
      </ListItem>
    )
  }
  return (
    <ListItem title="Show Complete" Icon={Eye} onClick={dense}>
      Show armor that is fully upgraded and items that are not needed.
    </ListItem>
  )
}
