import { PropsWithChildren } from 'react'
import { cn } from '@ddal-kkak/shared/utils'

type FieldContainerProps = PropsWithChildren<{
  className?: string
}>

export function FieldContainer({ children, className }: FieldContainerProps) {
  return <div className={cn('flex flex-col gap-4', 'w-full border border-neutral-200 bg-white rounded-lg p-10 ', className)}>{children}</div>
}
