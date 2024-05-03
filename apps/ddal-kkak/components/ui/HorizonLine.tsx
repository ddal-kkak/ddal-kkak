import React from 'react'

type Props = {
  className?: string
}

export default function HorizonLine({ className }: Props) {
  return <div className={`border-b border-b-grey-200 w-full ${className}`} />
}
