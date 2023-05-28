"use client"

import * as React from "react"
import Link from "next/link"
import { Download, LucideIcon, Mail, Upload } from "lucide-react"

import { siteConfig } from "@/config/site"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Export from "@/components/Export"
import Import from "@/components/Import"
import { ListItem } from "@/components/list-item"

export function MainNav() {
  return (
    <NavigationMenuList>
      {siteConfig.mainNav.map(({ href, title }) => (
        <NavigationMenuItem key={title}>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
      <NavigationMenuItem>
        <NavigationMenuTrigger>Options</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <Export />
            <Import />
            <ListItem
              title={"Give Feedback"}
              href={siteConfig.links.feedback}
              Icon={Mail}
            >
              Open a issue in GitHub to provide feedback.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  )
}
