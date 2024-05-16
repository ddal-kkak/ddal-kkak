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
