import { cn } from '@ddal-kkak/shared'
import React, { PropsWithChildren } from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  title: string
}

export default function Container({ children, className, title }: PropsWithChildren<ContainerProps>) {
  return (
    <div className={cn('relative w-full flex flex-col py-10 gap-10', className)}>
      <h1 className="text-headline24">{title}</h1>
      {children}
    </div>
  )
}
