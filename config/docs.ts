interface DocsConfig {
  mainNav: { title: string; href: string; external?: boolean }[]
}

export const docsConfig: DocsConfig = {
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
      title: "How To Use",
      href: "/how-to-use",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
  ],
}
