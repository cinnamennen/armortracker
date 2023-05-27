export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "TotK Armor Planner",
  description:
    "A handy tool for planning your armor upgrades in Tears of the Kingdom.",
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
    {
      title: "How to use",
      href: "/how-to-use",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Feedback",
      href: "https://github.com/cinnamennen/armortracker/issues/new",
    }
  ],
  links: {
    github: "https://github.com/cinnamennen/armortracker",
  },
}
