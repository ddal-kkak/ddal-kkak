import { PageStatusType, PageType } from '@/types/pages'
import customFetch, { CustomFetchConfig } from './fetch'

export async function getPages() {
  const config: CustomFetchConfig = {
    endpoint: `pages`,
    cache: 'no-store',
  }
  return customFetch(config)
}
export async function getPage(id: string | undefined): Promise<PageType | undefined> {
  if (!id) return undefined
  const config: CustomFetchConfig = {
    endpoint: `pages/${id}`,
    cache: 'no-store',
  }
  return customFetch(config)
}

export async function updateStatus(values: { id: string; status: PageStatusType }) {
  const { id, status } = values
  const config: CustomFetchConfig = {
    method: 'PUT',
    endpoint: `pages/${id}/status`,
    cache: 'no-store',
    body: { status },
  }
  return customFetch(config)
}
