"use client"
import Link from "next/link"
import { Github, Mail } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import Export from "@/components/Export"
import Import from "@/components/Import"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {NavigationMenu} from "@/components/ui/navigation-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <NavigationMenu>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/*<Import />*/}
            {/*<Export />*/}
            {/*<Link*/}
            {/*  href={siteConfig.links.feedback}*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer"*/}
            {/*>*/}
            {/*  <Button variant="ghost" size="sm">*/}
            {/*    <Mail className="mr-2 h-4 w-4" /> Give Feedback*/}
            {/*  </Button>*/}
            {/*</Link>*/}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="sm">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
          </NavigationMenu>
      </div>
    </header>
  )
}
