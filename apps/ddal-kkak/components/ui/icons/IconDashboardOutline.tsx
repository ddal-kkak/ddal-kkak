import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { ReactIconsType } from './type'
import { cn } from '@ddal-kkak/shared'

export default function IconDashboardOutline({ className = 'text-2xl' }: ReactIconsType) {
  return <MdOutlineDashboard className={cn('text-2xl', className)} />
}
