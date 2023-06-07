"use client"

import { selectCompact } from "@/store/slices/settings"
import { useAppSelector } from "@/store/store"
import { FoldHorizontal, UnfoldHorizontal } from "lucide-react"

import { useCompact } from "@/lib/hooks"
import { ListItem } from "@/components/list-item"

export default function Compact() {
  const compact = useCompact()
  const isCompact = useAppSelector(selectCompact)
  if (!isCompact) {
    return (
      <ListItem title="Compact UI" Icon={FoldHorizontal} onClick={compact}>
        Use a layout that shows more content on screen.
      </ListItem>
    )
  }
  return (
    <ListItem title="Spacious UI" Icon={UnfoldHorizontal} onClick={compact}>
      Use a layout that shows larger images.
    </ListItem>
  )
}
