// type 관련 폴더
export interface PagesType {
  id: number
  createdAt: string
  updatedAt: string
  title: string
  slug: string
  status: 'DRAFT' | 'PUBLISHED'
  uiJson: Record<string, any>
}

type MetaTagType = {
  id: number
  createdAt: string
  updatedAt: string
  property: string
  content: string
}

export interface PageType {
  id: 1
  createdAt: string
  updatedAt: string
  title: string
  slug: string
  status: string
  uiJson: any
  metaTagList: MetaTagType[]
}
