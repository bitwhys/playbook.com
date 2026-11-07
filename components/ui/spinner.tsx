import { SpinnerIcon } from '@phosphor-icons/react'
import type React from 'react'
import { cn } from 'tailwind-variants'

export function Spinner({
  className,
  ...props
}: React.ComponentProps<typeof SpinnerIcon>): React.ReactElement {
  return (
    <SpinnerIcon
      aria-label="Loading"
      className={cn('animate-spin', className)}
      role="status"
      {...props}
    />
  )
}
