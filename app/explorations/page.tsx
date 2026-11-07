import type { Metadata } from 'next'
import { ExplorationIndex } from '@/components/exploration-index'

export const metadata: Metadata = { title: 'Explorations' }

export default function Page() {
  return <ExplorationIndex />
}
