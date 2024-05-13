import { AiOutlineHome } from 'react-icons/ai'
import { ReactIconsType } from './type'
import { cn } from '@ddal-kkak/shared'

export default function IconHomeOutline({ className = 'text-2xl' }: ReactIconsType) {
  return <AiOutlineHome className={cn('text-2xl', className)} />
}
