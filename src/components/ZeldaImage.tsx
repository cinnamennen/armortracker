"use client"

import { useState } from "react"
import { ImageProps } from "next/dist/client/image"
import Image from "next/image"

import { cn, getDetectedPath } from "@/lib/utils"

const fallback = "/static/images/Rupee.png"

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
        "w-fill h-auto",
        className
      )}
      alt={`A picture of ${displayName}`}
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      {...props}
    />
  )
}
