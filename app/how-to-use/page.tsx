import Link from "next/link"
import { CornerRightUp } from "lucide-react"

export default function HowToUse() {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Setting up your armor
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You setup your armor on the{" "}
        <Link
          href="/armor"
          className="font-medium text-primary underline underline-offset-4"
        >
          armor page
        </Link>
        . Using the buttons underneath each armor piece set the armor to the
        same level that you have in game. If you haven&apos;t upgraded a piece
        of armor at all yet the correct level is &quot;Base&quot;.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If there are any pieces of armor that you don&apos;t have yet and wish
        to exclude from the results you can simply mark them as
        &quot;Ignored&quot;.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Setting up your inventory
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You setup your inventory on the{" "}
        <Link
          href="/inventory"
          className="font-medium text-primary underline underline-offset-4"
        >
          inventory page
        </Link>
        . Using the input underneath each item you can set how many of each item
        you have. For small tweaks you can also use the increment and decrement
        buttons at the end. Progress is measured against the goal of getting all
        upgradable armor to level 4.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Easily inputting an upgrade
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If you&apos;ve visited a great fairy to upgrade your armor you can
        quickly update everything using the upgrade button{" "}
        <CornerRightUp className="h-4 w-4 inline" /> on the{" "}
        <Link
          href="/armor"
          className="font-medium text-primary underline underline-offset-4"
        >
          armor page
        </Link>
        . This will automatically consume the required materials and increase
        the level of the armor. If for some reason your tracked inventory is
        short on materials (for example if you forgot to add some recently
        farmed items) it will consume as much as it can setting the amount to 0.
      </p>
    </div>
  )
}
