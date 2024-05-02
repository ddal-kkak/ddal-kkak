'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import IconClickOutline from './ui/icons/IconClickOutline'
import Menu from './Menu'

export default function Header() {
  const pathname = usePathname()
  const menu = Menu()

  return (
    <header className="sticky top-0 z-30 border-b border-b-neutral-200 w-full">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-10">
        <Link href={'/'} aria-label="Home" className="flex gap-2 items-center">
          <h1 className=" text-headline24">딸깍</h1>
          <IconClickOutline />
        </Link>
        <nav>
          <ul className="flex items-center gap-4 py-5">
            {Object.values(menu).map(({ value, href, title, clickedIcon, icon, isClicked }) => (
              <li key={value}>
                <Link href={href} aria-label={title}>
                  <div className="flex items-center gap-1 text-title18">
                    {isClicked(pathname) ? clickedIcon : icon}
                    {title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
