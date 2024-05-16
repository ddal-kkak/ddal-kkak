import { PageType } from '@/types/pages'
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
