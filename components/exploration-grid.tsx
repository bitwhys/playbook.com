import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@phosphor-icons/react/ssr'

export type ExplorationGridItem = {
  href: string
  title: string
  description: string
  preview: ReactNode
  linkLabel: string
}

export function ExplorationGrid({
  items,
}: {
  items: readonly ExplorationGridItem[]
}) {
  return (
    <ul className="grid grid-cols-1 gap-px border-b border-line bg-line md:grid-cols-2">
      {items.map((item) => (
        <li key={item.href} className="min-w-0 bg-background">
          <Link
            href={item.href}
            className="group flex h-full flex-col focus-visible:relative focus-visible:z-10 focus-visible:-outline-offset-4"
          >
            <div className="drafting-grid relative flex aspect-[2/1] items-center justify-center overflow-hidden border-b border-line">
              {item.preview}
            </div>
            <div className="flex flex-1 flex-col items-start px-5 py-7 sm:px-8 sm:py-9">
              <h2 className="font-display text-3xl leading-tight group-hover:underline group-hover:decoration-line group-hover:underline-offset-4">
                {item.title}
              </h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-gray-11 sm:text-lg">
                {item.description}
              </p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm text-gray-11 group-hover:text-foreground">
                {item.linkLabel}
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
