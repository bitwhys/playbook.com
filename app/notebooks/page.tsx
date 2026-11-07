import type { Metadata } from 'next'
import PageTemplate from '@/components/page-template'

export const metadata: Metadata = { title: 'Notebooks' }

export default function Page() {
  return (
    <PageTemplate
      title="Notebooks"
      description="Working notes, calculations, and experiments."
    />
  )
}
