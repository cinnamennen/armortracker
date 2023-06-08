const isDevelopment = process.env.NODE_ENV === "development"
export const siteConfig = {
  name: "TotK Armor Tracker",
  url: "https://totkarmortracker.com",
  description: "A tool to track your armor in TotK.",
  links: {
    feedback: "https://github.com/cinnamennen/armortracker/issues/new/choose",
    github: "https://github.com/cinnamennen/armortracker",
  },
  features: {
    compact: isDevelopment,
  },
}

export type SiteConfig = typeof siteConfig
