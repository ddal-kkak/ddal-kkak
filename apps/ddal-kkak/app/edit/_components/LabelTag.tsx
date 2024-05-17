import React, { PropsWithChildren } from 'react'

type LabelTagProps = {
  children: React.ReactNode
  label: string
}

export default function LabelTag({ children, label }: PropsWithChildren<LabelTagProps>) {
  return (
    <label className="w-full grid grid-cols-[80px_1fr]">
      <span className="h-full flex items-center">{label}</span>
      {children}
    </label>
  )
}
