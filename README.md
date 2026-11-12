This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Authoring explorations

Explorations use local MDX with [Code Hike](https://codehike.org/docs).
The first example is `/explorations/math/small-samples`: its `page.tsx` owns
metadata and framing, `content.mdx` owns the narrative, and
`sample-size-widget.tsx` owns browser interaction.

### Add an exploration

1. Add its title, description, category, slug, and optional preview to
   `lib/explorations.ts`. Keep metadata here; MDX frontmatter is not configured.
2. Create `app/explorations/<category>/<slug>/page.tsx` and `content.mdx`.
   Import the MDX default export into the page, resolve its catalog entry with
   `getExploration`, and export Next.js metadata from that entry.
3. Compose the page with `PageTemplate`. Use `contentLayout="full-width"` for
   articles or wide visuals, or the default panel for contained experiments.
   The small-samples page demonstrates a padded, readable article container.
4. Exclude the explicit slug from that category's `[slug]/page.tsx`
   `generateStaticParams`. Explicit routes take precedence; the dynamic route
   remains available for the other placeholder samples.
5. Start MDX with prose or an H2; the page frame already supplies the H1.
   Import interactive components directly into MDX, for example:

   ```mdx
   import { MyWidget } from './my-widget'

   ## Explore the relationship

   <MyWidget />
   ```

   Put `'use client'` in the widget module when it needs state or browser APIs.
   Keep the MDX file and page server-rendered.

Use ordinary fenced code blocks with a language and optional filename, such as
an opening fence of three backticks followed by `ts standard-error.ts`.
`mdx-components.tsx` supplies prose elements and the shared Code Hike renderer.
Links, lists, blockquotes, and inline code work without additional imports.

The code renderer uses `github-from-css` with light/dark variables in
`styles/code.css`. Its `use cache` boundary caches highlighting by code-block
input and accommodates the highlighter's internal clock access under Next.js
Cache Components. The `.mjs` plugin adapters in `lib/mdx` allow Turbopack to
load Code Hike's named plugins through serializable module paths.

This foundation does not execute fenced code, discover content automatically,
or provide scrollytelling. Add bespoke React components as the narrative needs
them. The sample-size example is an illustration, not published research.

### Validate authoring changes

Run `pnpm lint` and `pnpm build`. In `pnpm dev`, check direct navigation and
category links, light/dark themes, narrow screens, and keyboard interaction.
The sample-size widget should show 15.81, 5.00, and 1.58 percentage points at
10, 100, and 1,000 flips respectively. Unknown exploration URLs should remain
404s; `/` should continue redirecting to `/explorations`.
