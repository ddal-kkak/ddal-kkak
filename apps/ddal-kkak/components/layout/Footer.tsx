import React from 'react'
import dayjs from 'dayjs'

export default function Footer() {
  const currentYear = dayjs().year()

  return <p className="mt-10 bg-slate-900 py-4 text-center text-sm text-white">{`ⓒ ${currentYear} 딸깍 - All Right Reserved`}</p>
}
