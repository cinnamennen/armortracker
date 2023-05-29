"use client"

import * as React from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { Mail } from "lucide-react"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Export from "@/components/Export"
import Import from "@/components/Import"
import { Icons } from "@/components/icons"
import { ListItem } from "@/components/list-item"

export function MainNav() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className="mr-4 hidden md:flex">
          <NextLink href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-8 w-8" />
          </NextLink>
          <nav className="flex items-center space-x-1 text-sm font-medium">
            {docsConfig.mainNav?.map(({ href, title }) => (
              <NavigationMenuItem key={title}>
                <Link href={href}>{title}</Link>
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
          </nav>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Link = ({ href, ...props }: any) => {
  const path = usePathname()
  const isActive = path === href

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          "transition-colors hover:text-foreground/80",
          isActive ? "text-foreground" : "text-foreground/50"
        )}
        {...props}
      />
    </NextLink>
  )
}
