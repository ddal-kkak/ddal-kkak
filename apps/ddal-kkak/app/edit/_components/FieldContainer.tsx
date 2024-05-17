import React, { PropsWithChildren } from 'react'

type Props = {
  children: React.ReactNode
}

export default function FieldContainer({ children }: PropsWithChildren<Props>) {
  return <div className="w-full border border-neutral-200 bg-white rounded-lg p-4 md:p-6 lg:p-10 flex gap-4 flex-col">{children}</div>
}
