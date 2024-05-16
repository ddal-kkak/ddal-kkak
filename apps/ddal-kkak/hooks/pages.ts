import { useQuery } from '@tanstack/react-query'
import { getPages } from 'service/client'

export const usePages = (id?: string) => {
  const fetcher = id ? () => {} : getPages

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['pages', id],
    queryFn: fetcher,
  })

  return { data, isLoading, isError, refetch }
}
