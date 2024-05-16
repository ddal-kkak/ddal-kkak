'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const GridLoader = dynamic(() => import('react-spinners/GridLoader'), {
  ssr: false,
})
const PropagateLoader = dynamic(() => import('react-spinners/PropagateLoader'), {
  ssr: false,
})
const BeatLoader = dynamic(() => import('react-spinners/BeatLoader'), {
  ssr: false,
})
const SyncLoader = dynamic(() => import('react-spinners/SyncLoader'), {
  ssr: false,
})

type Props = {
  color?: string
  size?: number
  type?: 'grid' | 'horizon' | 'beat' | 'ring' | 'sync'
  className?: string
}
export default function LoadingSpinner({ color = 'grey', size = 8, type = 'beat', className }: Props) {
  switch (type) {
    case 'grid':
      return <GridLoader color={color} size={size} className={className} />

    case 'horizon':
      return <PropagateLoader color={color} size={size} className={className} />

    case 'beat':
      return <BeatLoader color={color} size={size} className={className} />

    case 'sync':
      return <SyncLoader color={color} size={size} className={className} />

    default:
      return <BeatLoader color={color} size={size} className={className} />
  }
}
