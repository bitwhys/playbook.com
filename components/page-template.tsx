import type { ReactNode } from 'react'

type PageTemplateProps = {
  title: string
  description: string
  children?: ReactNode
  contentLayout?: 'panel' | 'full-width'
}

export default function PageTemplate({
  title,
  description,
  children,
  contentLayout = 'panel',
}: PageTemplateProps) {
  return (
    <>
      <section
        aria-labelledby="page-title"
        className="frame-rule relative grid gap-6 border-b border-line px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16"
      >
        <h1
          id="page-title"
          className="text-4xl font-display sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>
        <p
          id="page-description"
          className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </p>
      </section>
      <section
        id="exploration-container"
        aria-label={title}
        className={
          contentLayout === 'panel'
            ? 'flex min-h-96 flex-1 p-3 sm:min-h-128 sm:p-5'
            : 'min-w-0 flex-1'
        }
      >
        {contentLayout === 'panel' ? (
          <div className="drafting-grid min-w-0 flex-1 rounded-xl border border-line bg-panel">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    </>
  )
}
