"use client"

import * as React from "react"
import { Mail } from "lucide-react"

import { siteConfig } from "@/config/site"
import { ListItem } from "@/components/list-item"

export default function Feedback() {
  return (
    <ListItem
      title="Give Feedback"
      href={siteConfig.links.feedback}
      Icon={Mail}
    >
      Open a issue in GitHub to provide feedback.
    </ListItem>
  )
}
