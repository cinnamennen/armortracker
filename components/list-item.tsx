import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

export const ListItem = forwardRef<
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
              {Icon && <Icon className="mr-2 h-4 w-4" />}
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
