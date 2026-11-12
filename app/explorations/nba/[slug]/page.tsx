import {
  SampleExploration,
  getSampleExploration,
} from '@/components/sample-exploration'
import { explorations } from '@/lib/explorations'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return explorations
    .filter((entry) => entry.category === 'nba')
    .map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: getSampleExploration('nba', slug).title }
}

export default async function Page({ params }: Props) {
  // FIXME: this cases an error with Next.js 16.3 Instant Navigation feature (wrap in suspense)
  const { slug } = await params
  return <SampleExploration category="nba" slug={slug} />
}
