'use client'

import { useId, useState } from 'react'

export function SampleSizeWidget() {
  const id = useId()
  const [sampleSize, setSampleSize] = useState(100)
  const standardError = Math.sqrt((0.5 * 0.5) / sampleSize)

  return (
    <div className="my-8 rounded-xl border border-line bg-panel p-5 sm:p-8">
      <label
        htmlFor={id}
        className="flex flex-wrap justify-between gap-2 font-medium"
      >
        <span>Number of coin flips</span>
        <span className="font-mono tabular-nums">{sampleSize}</span>
      </label>
      <input
        id={id}
        type="range"
        min={10}
        max={1000}
        step={10}
        value={sampleSize}
        onChange={(event) => setSampleSize(Number(event.target.value))}
        aria-describedby={`${id}-description`}
        className="my-5 block w-full accent-current"
      />
      <output htmlFor={id} className="block text-lg" aria-live="polite">
        Standard error:{' '}
        <strong className="font-mono tabular-nums">
          {(standardError * 100).toFixed(2)}
        </strong>{' '}
        percentage points
      </output>
      <div
        aria-hidden="true"
        className="mt-4 h-3 overflow-hidden rounded-full bg-surface"
      >
        <div
          className="h-full rounded-full bg-ink"
          style={{ width: `${(standardError / Math.sqrt(0.25 / 10)) * 100}%` }}
        />
      </div>
      <p
        id={`${id}-description`}
        className="mt-4 text-sm leading-relaxed text-muted"
      >
        A hypothetical fair coin, with independent flips. The bar shows standard
        error relative to 10 flips; it is not a simulated outcome or a
        confidence interval.
      </p>
    </div>
  )
}
