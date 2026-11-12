import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import { resolve } from 'node:path'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

const codeHike = { components: { code: 'Code' } }

const withMDX = createMDX({
  options: {
    remarkPlugins: [[resolve('lib/mdx/remark-code-hike.mjs'), codeHike]],
    recmaPlugins: [[resolve('lib/mdx/recma-code-hike.mjs'), codeHike]],
  },
})

export default withMDX(nextConfig)
