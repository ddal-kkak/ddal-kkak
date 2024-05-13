import { RiEditBoxLine } from 'react-icons/ri'
import { ReactIconsType } from './type'
import { cn } from '@ddal-kkak/shared'

export default function IconEditOutline({ className = 'text-2xl' }: ReactIconsType) {
  return <RiEditBoxLine className={cn('text-2xl', className)} />
}
