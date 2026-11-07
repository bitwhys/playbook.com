import type { Metadata } from 'next'
import { ExplorationIndex } from '@/components/exploration-index'
import { explorationCategories } from '@/lib/explorations'

export const metadata: Metadata = { title: explorationCategories.nfl.title }

export default function Page() {
  return <ExplorationIndex category="nfl" />
}
