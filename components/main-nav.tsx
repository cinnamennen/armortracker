"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <NavigationMenu>
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
      </NavigationMenuList>
    </NavigationMenu>
  )
}
