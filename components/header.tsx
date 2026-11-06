import Link from "next/link";
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
      <nav
        aria-label="Main navigation"
        className="flex items-stretch px-3 sm:px-5"
      >
        <Link
          href="/"
          className="flex items-center px-3 py-5 text-sm font-medium underline decoration-line underline-offset-8 transition-colors hover:decoration-foreground"
        >
          Explorations
        </Link>
      </nav>
      <p className="ml-auto hidden items-center border-l border-line px-8 text-sm text-muted md:flex">
        Sports, politics &amp; the numbers behind them.
      </p>
    </header>
  );
};
