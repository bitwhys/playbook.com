import Image from 'next/image'
import { ExplorationPreview } from '@/components/exploration-preview'
import {
  BasketballIcon,
  FootballIcon,
  FunctionIcon,
  ChartScatterIcon,
} from '@phosphor-icons/react/ssr'
import PageTemplate from '@/components/page-template'
import { ExplorationGrid } from '@/components/exploration-grid'
import {
  explorationCategories,
  explorations,
  type ExplorationCategory,
} from '@/lib/explorations'

const categoryIcons = {
  nba: BasketballIcon,
  nfl: FootballIcon,
  math: FunctionIcon,
  general: ChartScatterIcon,
}

function CategoryPreview({ category }: { category: ExplorationCategory }) {
  const Icon = categoryIcons[category]
  return (
    <div
      aria-hidden="true"
      className="flex size-24 items-center justify-center rounded-2xl border border-line bg-surface-raised shadow-xs sm:size-32"
    >
      <Icon weight="thin" className="size-14 text-gray-11 sm:size-20" />
    </div>
  )
}

export function ExplorationIndex({
  category,
}: {
  category?: ExplorationCategory
}) {
  const heading = category
    ? explorationCategories[category]
    : {
        title: 'Explorations',
        description:
          'Thoughtful analysis, with room to test ideas for yourself.',
      }

  const items = category
    ? explorations
        .filter((entry) => entry.category === category)
        .map((entry) => ({
          href: `/explorations/${entry.category}/${entry.slug}`,
          title: entry.title,
          description: entry.description,
          linkLabel: entry.sample ? 'View sample' : 'Read exploration',
          preview: entry.sample ? (
            <ExplorationPreview variant={entry.sample} />
          ) : entry.preview ? (
            <Image
              src={entry.preview.src}
              alt={entry.preview.alt}
              fill
              sizes="(min-width: 1600px) 800px, (min-width: 768px) 50vw, 100vw"
              className="object-contain p-5 sm:p-8"
            />
          ) : (
            <CategoryPreview category={entry.category} />
          ),
        }))
    : (Object.keys(explorationCategories) as ExplorationCategory[]).map(
        (key) => ({
          href: `/explorations/${key}`,
          ...explorationCategories[key],
          linkLabel: `Browse ${explorationCategories[key].title}`,
          preview: <CategoryPreview category={key} />,
        })
      )

  return (
    <PageTemplate {...heading} contentLayout="full-width">
      {items.length > 0 ? (
        <ExplorationGrid items={items} />
      ) : (
        <div className="flex min-h-96 items-center justify-center border-b border-line drafting-grid px-5 py-16 sm:min-h-128">
          <div className="max-w-md border border-line bg-surface-raised p-8 text-center">
            <h2 className="font-display text-2xl">No explorations yet</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-11">
              New {heading.title === 'General' ? 'general' : heading.title}{' '}
              explorations will appear here as they’re published.
            </p>
          </div>
        </div>
      )}
    </PageTemplate>
  )
}
