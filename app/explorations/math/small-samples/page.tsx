import type { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/components/page-template'
import { getExploration } from '@/lib/explorations'
import Content from './content.mdx'

const entry = getExploration('math', 'small-samples')

export const metadata: Metadata = {
  title: entry.title,
  description: entry.description,
}

export default function Page() {
  return (
    <PageTemplate
      title={entry.title}
      description={entry.description}
      contentLayout="full-width"
    >
      <article className="mx-auto w-full max-w-3xl min-w-0 px-5 py-8 sm:px-8 sm:py-12">
        <Content />
        <Link
          href="/explorations/math"
          className="mt-10 inline-block text-sm underline underline-offset-4"
        >
          Back to Math explorations
        </Link>
      </article>
    </PageTemplate>
  )
}
