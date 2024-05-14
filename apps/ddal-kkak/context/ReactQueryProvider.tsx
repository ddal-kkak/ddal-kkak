'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function ReactQueryProviders({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default ReactQueryProviders
