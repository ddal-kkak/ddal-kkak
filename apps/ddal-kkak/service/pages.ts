import customFetch, { CustomFetchConfig } from './fetch'

export async function getPages() {
  const config: CustomFetchConfig = {
    endpoint: `pages`,
    cache: 'no-store',
  }
  return customFetch(config)
}
