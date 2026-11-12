import { highlight, Pre, type RawCode } from 'codehike/code'

export async function Code({ codeblock }: { codeblock: RawCode }) {
  'use cache'

  const highlighted = await highlight(codeblock, 'github-from-css')

  return (
    <figure className="my-6 min-w-0 overflow-hidden rounded-xl border border-line">
      {codeblock.meta && (
        <figcaption className="border-b border-line bg-panel px-4 py-2 font-mono text-sm text-muted">
          {codeblock.meta}
        </figcaption>
      )}
      <Pre
        code={highlighted}
        style={highlighted.style}
        tabIndex={0}
        aria-label={
          codeblock.meta || `${codeblock.lang || 'Plain text'} code example`
        }
        className="overflow-x-auto p-4 text-sm leading-relaxed focus-visible:outline-2 focus-visible:-outline-offset-2"
      />
    </figure>
  )
}
