import { PageStatusType, PagesType, PageType } from '@/types/pages'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PageSchema } from '../schemas'
import { z } from 'zod'

// 페이지 리스트
async function getPages(): Promise<PagesType[]> {
  return fetch('/api/pages').then((res) => res.json())
}
export const usePages = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['pages'],
    queryFn: () => getPages(),
  })

  return { data, isLoading, isError, refetch }
}

// 페이지 디테일 페이지
async function getPage(item?: PageType): Promise<PageType | undefined> {
  if (!item) return undefined
  return fetch(`/api/pages/${item.id}`).then((res) => res.json())
}
export const usePage = (page?: PageType) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: page ? ['page', page.id] : ['page'],
    queryFn: () => getPage(page),
  })

  return { data, isLoading, isError, refetch }
}

// 페이지 배포 상태 업데이트
async function updateStatus(values: { id: string; status: PageStatusType }): Promise<any> {
  const { id, status } = values
  return fetch(`/api/pages/status?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  }).then((res) => res.json())
}

export const useUpdateStatus = (id: string) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: (status: PageStatusType) => updateStatus({ id, status }),
    onMutate: async (status: PageStatusType) => {
      await queryClient.cancelQueries({ queryKey: ['pages'] })
      const previousPage = queryClient.getQueryData<PagesType[]>(['pages'])

      queryClient.setQueryData<PagesType[]>(['pages'], (old) => old!.map((i) => (String(i.id) === id ? i : { ...i, status })))
      return { previousPage }
    },
    onError: (err, _, context) => {
      console.error('Failed to update status: ', err)
      queryClient.setQueryData(['pages'], context?.previousPage)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] })
    },
    onSuccess: () => {
      console.log('status updated')
    },
  })

  return { mutateAsync, isPending, isSuccess }
}

// 페이지 생성
type Form = z.infer<typeof PageSchema>
async function createPage(data: Form): Promise<any> {
  const value = {
    ...data.info,
    metaTagList: data.metaTagList,
    uiJson: {
      dataList: data.dataList,
    },
  }
  return fetch(`/api/pages`, {
    method: 'POST',
    body: JSON.stringify({ value }),
  }).then((res) => res.json())
}
export const useCreatePage = () => {
  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: (data: Form) => createPage(data),
    onSuccess: () => {
      console.log('page created')
    },
  })

  return { mutateAsync, isPending, isSuccess }
}
