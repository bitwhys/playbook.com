'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenu } from '@base-ui/react/navigation-menu'
import {
  BasketballIcon,
  FootballIcon,
  FunctionIcon,
  ChartScatterIcon,
  CaretDownIcon,
  ArrowRightIcon,
} from '@phosphor-icons/react'

const groups = [
  {
    title: 'Sports',
    items: [
      {
        title: 'NBA',
        href: '/explorations/nba',
        description: 'Basketball through the numbers.',
        icon: BasketballIcon,
      },
      {
        title: 'NFL',
        href: '/explorations/nfl',
        description: 'A statistical view of football.',
        icon: FootballIcon,
      },
    ],
  },
  {
    title: 'Foundations',
    items: [
      {
        title: 'Math',
        href: '/explorations/math',
        description: 'The ideas behind the analysis.',
        icon: FunctionIcon,
      },
      {
        title: 'General',
        href: '/explorations/general',
        description: 'Questions, patterns, and possibilities.',
        icon: ChartScatterIcon,
      },
    ],
  },
]

const triggerClassName =
  'flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-gray-3 focus-visible:bg-gray-3 data-popup-open:bg-gray-3 data-active:bg-gray-3'

export function SiteNavigation() {
  const navigationRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  return (
    <NavigationMenu.Root
      ref={navigationRef}
      aria-label="Main navigation"
      className="flex min-w-0 flex-1 items-center px-2 sm:px-5"
    >
      <NavigationMenu.List className="flex flex-wrap items-center gap-1 py-2">
        <NavigationMenu.Item value="explorations">
          <NavigationMenu.Trigger className={triggerClassName}>
            Explorations
            <NavigationMenu.Icon className="transition-transform data-popup-open:rotate-180">
              <CaretDownIcon aria-hidden="true" className="size-3.5" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.1fr]">
              {groups.map((group) => (
                <section
                  key={group.title}
                  aria-label={group.title}
                  className="border-b border-line p-5 sm:p-7 lg:border-r lg:border-b-0"
                >
                  <h2 className="mb-4 text-sm font-medium text-gray-11">
                    {group.title}
                  </h2>
                  <ul className="space-y-2">
                    {group.items.map(
                      ({ title, href, description, icon: Icon }) => (
                        <li key={href}>
                          <NavigationMenu.Link
                            render={<Link href={href} />}
                            closeOnClick
                            active={
                              pathname === href ||
                              pathname.startsWith(`${href}/`)
                            }
                            className="-mx-2 flex gap-4 rounded-lg p-2 transition-colors hover:bg-gray-3 data-active:bg-gray-3"
                          >
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-background shadow-xs">
                              <Icon aria-hidden="true" className="size-5" />
                            </span>
                            <span>
                              <span className="block font-medium">{title}</span>
                              <span className="mt-1 block max-w-64 text-sm leading-relaxed text-gray-11">
                                {description}
                              </span>
                            </span>
                          </NavigationMenu.Link>
                        </li>
                      )
                    )}
                  </ul>
                </section>
              ))}
              <div className="drafting-grid p-5 sm:col-span-2 sm:p-7 lg:col-span-1">
                <NavigationMenu.Link
                  render={<Link href="/explorations" />}
                  active={pathname === '/explorations'}
                  closeOnClick
                  className="flex h-full min-h-40 flex-col rounded-xl border border-line bg-popover p-6 transition-colors hover:bg-gray-3"
                >
                  <span className="text-lg font-medium">
                    Explore the numbers
                  </span>
                  <span className="mt-2 max-w-80 text-sm leading-relaxed text-gray-11">
                    Thoughtful analysis and interactive ways to test an idea.
                  </span>
                  <span className="mt-6 flex items-center gap-2 text-sm font-medium">
                    All explorations <ArrowRightIcon aria-hidden="true" />
                  </span>
                </NavigationMenu.Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            render={<Link href="/notebooks" />}
            active={
              pathname === '/notebooks' || pathname.startsWith('/notebooks/')
            }
            closeOnClick
            className={triggerClassName}
          >
            Notebooks
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          anchor={() => navigationRef.current?.closest('header') ?? null}
          side="bottom"
          align="start"
          collisionAvoidance={{ side: 'none', align: 'shift' }}
          className="z-40 w-(--anchor-width) max-w-[calc(100vw-1.5rem)]"
        >
          <NavigationMenu.Popup className="max-h-[min(36rem,70dvh)] overflow-y-auto border-b border-line bg-popover text-foreground shadow-xl/10 outline-none">
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  )
}
