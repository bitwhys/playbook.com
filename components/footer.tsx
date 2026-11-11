import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="frame-rule relative flex flex-col gap-3 border-t border-line px-5 py-7 text-sm before:-top-1 before:bottom-auto after:-top-1 after:bottom-auto sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <Link href="/" className="w-fit text-lg font-bold tracking-[-0.06em]">
        playbook<span className="text-muted">.</span>
      </Link>
      <p className="text-muted">A closer look at the numbers.</p>
    </footer>
  )
}
