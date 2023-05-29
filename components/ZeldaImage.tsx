"use client"

import { useState } from "react"
import { ImageProps } from "next/dist/client/image"
import Image from "next/image"

import { cn, getDetectedPath } from "@/lib/utils"

const fallback = "/static/images/Rupee.png"

export function ZeldaImage({
  zelda,
  className,
  ...props
}: {
  zelda: { displayName: string; path?: string }
} & Partial<ImageProps>) {
  const [imgSrc, setImgSrc] = useState(getDetectedPath(zelda))

  return (
    <Image
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback)
      }}
      className={cn(className, imgSrc === fallback && "opacity-30")}
      alt={`A picture of ${zelda.displayName}`}
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      {...props}
    />
  )
}
