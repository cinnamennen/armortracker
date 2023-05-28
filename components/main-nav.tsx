"use client"

import * as React from "react"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import Link from "next/link"
import {Download, LucideIcon, Mail, Upload} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
        <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                {...component}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  )
}

const components: {
  title: string
  href?: string
  description: string
  Icon?: LucideIcon
  onClick?: () => void
}[] = [
  {
    title: "Export",
    description:
      "Export your armor and inventory to your clipboard so that you can load it on another device.",
    Icon: Upload,
    onClick: () => {console.log("clicked")}
  },
  {
    title: "Import",
    description:
      "Import your armor and inventory data from your clipboard.",
    Icon: Download,
  },
  {
    title: "Give Feedback",
    href: siteConfig.links.feedback,
    Icon: Mail,

    description:
      "Open a issue in GitHub to provide feedback.",
  },
]

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a"> & { Icon?: LucideIcon }
>(({ className, title, Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="inline-flex items-end text-sm font-medium leading-none">
            <>
              {Icon && <Icon className="h-4 w-4 mr-2"/>}
              {title}
            </>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
