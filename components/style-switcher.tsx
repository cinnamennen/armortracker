"use client"

import { useEffect } from "react"
import { useSelectedLayoutSegments } from "next/navigation"

export function StyleSwitcher() {
  const segments = useSelectedLayoutSegments()

  useEffect(() => {
    document.body.removeAttribute("data-section")

    const section = segments.at(-1)
    if (section && typeof window !== "undefined") {
      document.body.setAttribute("data-section", section)
    }
  }, [segments])

  return null
}
