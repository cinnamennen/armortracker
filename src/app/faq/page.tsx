import Link from "next/link"

export default function FAQ() {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        A recipe is wrong!
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        A best effort was made to ensure that all recipes are correct. If you
        find a recipe that is wrong, please let me know by{" "}
        <Link
          href="https://github.com/cinnamennen/armortracker/issues/new"
          className="font-medium text-primary underline underline-offset-4"
        >
          opening an issue on GitHub
        </Link>
        . When you do so please include some sort of citation for the recipe,
        whether that&apos;s some links to other sites with the recipe or a
        screenshot of the recipe in game.
      </p>
    </div>
  )
}
