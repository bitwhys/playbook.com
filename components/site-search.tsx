'use client'

import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogPrimitive,
  CommandDialogTrigger,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandPanel,
} from '@/components/ui/command'

export function SiteSearch() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key.toLowerCase() === 'k' &&
        (event.metaKey || event.ctrlKey) &&
        !event.altKey &&
        !event.shiftKey &&
        !event.repeat &&
        !event.isComposing
      ) {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandDialogTrigger
        aria-label="Search explorations"
        aria-keyshortcuts="Meta+K Control+K"
        render={<Button variant="ghost" className="gap-2 text-gray-11" />}
      >
        <MagnifyingGlassIcon aria-hidden="true" />
        <span className="hidden sm:inline">Search</span>
        <kbd
          aria-hidden="true"
          className="ml-2 hidden rounded bg-gray-3 px-1.5 py-0.5 font-sans text-xs text-gray-11 lg:inline-flex"
        >
          ⌘ / Ctrl K
        </kbd>
      </CommandDialogTrigger>
      <CommandDialogPopup className="border-line before:bg-panel">
        <CommandDialogPrimitive.Title className="sr-only">
          Search explorations
        </CommandDialogPrimitive.Title>
        <CommandDialogPrimitive.Description className="sr-only">
          Search sports and politics explorations. Search will be available when
          explorations are published.
        </CommandDialogPrimitive.Description>
        <Command items={[]}>
          <div className="relative pr-12">
            <CommandInput
              aria-label="Search explorations"
              placeholder="Search explorations…"
            />
            <CommandDialogPrimitive.Close
              aria-label="Close search"
              className="absolute top-3 right-3"
              render={<Button size="icon-sm" variant="ghost" />}
            >
              <XIcon aria-hidden="true" />
            </CommandDialogPrimitive.Close>
          </div>
          <CommandPanel className="border-line">
            <CommandEmpty className="px-6 text-center text-sm text-gray-11">
              No explorations yet. Search will be available once they’re
              published.
            </CommandEmpty>
            <CommandList />
          </CommandPanel>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  )
}
