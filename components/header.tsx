import Link from 'next/link'
import { GithubLogoIcon } from '@phosphor-icons/react/ssr'
import { ThemeToggle } from './theme-toggle'
import { SiteSearch } from './site-search'
import { SiteNavigation } from './site-navigation'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <header className="frame-rule relative flex min-h-18 flex-wrap border-b border-line">
      <Link
        href="/"
        aria-label="Playbook home"
        className="flex items-center border-r border-line px-5 py-5 text-2xl font-bold tracking-[-0.07em] sm:px-8 lg:min-w-60"
      >
        playbook<span className="text-muted">.</span>
      </Link>
      <SiteNavigation />
      <div className="flex w-full justify-end border-t border-line lg:w-auto lg:border-t-0">
        <div className="flex flex-1 items-center px-3 py-3 sm:flex-none sm:border-l sm:border-line sm:px-5">
          <SiteSearch />
        </div>
        <div className="flex items-center gap-3 border-l border-line px-4 sm:px-5">
          <ThemeToggle />
          <Button
            render={
              <a
                href="https://github.com/bitwhys/playbook.com"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            aria-label="Playbook on GitHub (opens in a new tab)"
          >
            <GithubLogoIcon aria-hidden="true" weight="fill" />
            GitHub
          </Button>
        </div>
      </div>
    </header>
  )
}
