'use client'
import React from 'react'
import dayjs from 'dayjs'
import { usePathname } from 'next/navigation'
import { MENU_ROUTER } from 'constant/route'

export default function Footer() {
  const currentYear = dayjs().year()
  const pathname = usePathname()
  const isVisible = Object.values(MENU_ROUTER).map((i) => i.isClicked)

  return <p className={`mt-10 w-full bg-slate-900 py-4 text-center text-sm text-white ${isVisible.some((fn) => fn(pathname)) ? 'block' : 'hidden'}`}>{`ⓒ ${currentYear} 딸깍 - All Right Reserved`}</p>
}
