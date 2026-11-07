import {
  SampleExploration,
  getSampleExploration,
} from '@/components/sample-exploration'
import { explorations } from '@/lib/explorations'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return explorations
    .filter((entry) => entry.category === 'nfl')
    .map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: getSampleExploration('nfl', slug).title }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <SampleExploration category="nfl" slug={slug} />
}
