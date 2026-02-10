"use client"

import { FC, ReactNode } from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

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
import Clear from "@/components/Clear"
import Compact from "@/components/Compact"
import Dense from "@/components/Dense"
import Export from "@/components/Export"
import Feedback from "@/components/Feedback"
import { Icons } from "@/components/icons"
import Import from "@/components/Import"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className="mr-4 hidden md:flex">
          <NextLink href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="size-8" />
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <Export />
                  <Import />
                  <Feedback />
                  <Clear />
                  {siteConfig.features.compact && <Compact />}
                  <Dense />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </nav>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Link: FC<{ href: string; children: ReactNode }> = ({
  href,
  ...props
}) => {
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
