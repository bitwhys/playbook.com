import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Code } from '@/components/mdx/code'

const components = {
  Code,
  h1: (props) => <h1 className="mt-10 mb-5 font-display text-4xl" {...props} />,
  h2: (props) => <h2 className="mt-10 mb-4 font-display text-3xl" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 font-display text-2xl" {...props} />,
  p: (props) => <p className="my-5 leading-relaxed" {...props} />,
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6" {...props} />,
  a: ({ href, ...props }) => (
    <Link
      href={href ?? '#'}
      className="underline underline-offset-4"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-line pl-5 text-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-panel px-1 py-0.5 font-mono text-[0.9em]"
      {...props}
    />
  ),
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
