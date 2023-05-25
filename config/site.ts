export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Armor",
      href: "/armor",
    },
    {
      title: "Inventory",
      href: "/inventory",
    },
    {
      title: "Missing",
      href: "/missing",
    },
  ],
  links: {
    github: "https://github.com/shadcn/ui", // TODO: Change this
  },
}
