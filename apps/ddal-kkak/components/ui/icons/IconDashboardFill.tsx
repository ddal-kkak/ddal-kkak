import { MdDashboard } from 'react-icons/md'
import { ReactIconsType } from './type'
import { cn } from '@ddal-kkak/shared'

export default function IconDashboardFill({ className = 'text-2xl' }: ReactIconsType) {
  return <MdDashboard className={cn('text-2xl', className)} />
}
