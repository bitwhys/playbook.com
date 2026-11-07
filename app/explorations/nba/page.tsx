import type { Metadata } from 'next'
import { ExplorationIndex } from '@/components/exploration-index'
import { explorationCategories } from '@/lib/explorations'

export const metadata: Metadata = { title: explorationCategories.nba.title }

export default function Page() {
  return <ExplorationIndex category="nba" />
}
