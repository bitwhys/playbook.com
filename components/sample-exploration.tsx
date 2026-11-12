import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageTemplate from '@/components/page-template'
import { ExplorationPreview } from '@/components/exploration-preview'
import {
  getExploration,
  explorationCategories,
  type ExplorationCategory,
} from '@/lib/explorations'

export function getSampleExploration(
  category: ExplorationCategory,
  slug: string
) {
  const entry = getExploration(category, slug)
  if (!entry || !entry.sample) notFound()
  return entry
}

export function SampleExploration({
  category,
  slug,
}: {
  category: ExplorationCategory
  slug: string
}) {
  const entry = getSampleExploration(category, slug)
  return (
    <PageTemplate title={entry.title} description={entry.description}>
      <div className="grid min-h-full lg:grid-cols-[3fr_2fr]">
        <div className="flex min-h-64 items-center border-b border-line lg:border-r lg:border-b-0">
          <div className="aspect-2/1 w-full">
            <ExplorationPreview variant={entry.sample!} />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center bg-surface p-6 sm:p-10">
          <h2 className="font-display text-3xl">
            An exploration in the making
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-gray-11">
            This is a sample page for previewing the layout. The illustration
            uses invented values and does not represent research findings.
          </p>
          <p className="mt-4 max-w-prose leading-relaxed text-gray-11">
            The finished exploration will bring together analysis, supporting
            data, and an interactive widget.
          </p>
          <Link
            href={`/explorations/${category}`}
            className="mt-8 text-sm underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Back to {explorationCategories[category].title} explorations
          </Link>
        </div>
      </div>
    </PageTemplate>
  )
}
