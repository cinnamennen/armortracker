"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"

import { cn, getDetectedPath } from "@/lib/utils"

const fallback = "/images/Rupee.png"

export function ZeldaImage({
  displayName,
  className,
  ...props
}: {
  displayName: string
} & Partial<ImageProps>) {
  const [imgSrc, setImgSrc] = useState(getDetectedPath(displayName))

  return (
    <Image
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback)
      }}
      className={cn(
        imgSrc === fallback && "opacity-30",
        "h-auto w-full",
        className
      )}
      alt={`A picture of ${displayName}`}
      width={256}
      height={256}
      quality={100}
      {...props}
    />
  )
}
