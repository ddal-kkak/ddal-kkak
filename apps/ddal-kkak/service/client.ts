import { PagesType } from '@/types/pages'

export async function getPages(): Promise<PagesType[]> {
  return fetch('/api/pages').then((res) => res.json())
}
