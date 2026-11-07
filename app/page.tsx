import type { Metadata } from 'next'
import PageTemplate from '@/components/page-template'

export const metadata: Metadata = { title: 'Explorations' }

export default function Page() {
  return (
    <PageTemplate
      title="Explorations"
      description="Sports, statistics, and the ideas behind the numbers."
    />
  )
}
