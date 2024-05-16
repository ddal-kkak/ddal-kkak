import { PagesType } from '@/types/pages'
import { useQuery } from '@tanstack/react-query'

async function getPages(): Promise<PagesType[]> {
  return fetch('/api/pages').then((res) => res.json())
}

export const usePages = (id?: string) => {
  const fetcher = id ? () => {} : getPages

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['pages', id],
    queryFn: fetcher,
  })

  return { data, isLoading, isError, refetch }
}
