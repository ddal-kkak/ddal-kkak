'use client'
import Container from '@/components/layout/Container'
import { usePages } from '@/hooks/pages'
import { Button } from '@ddal-kkak/ui/atoms'
import DashboardCard from './DashboardCard'
import { PagesType } from '@/types/pages'
import { useRouter } from 'next/navigation'
import { MENU_ROUTER } from 'constant/route'

const dummy: PagesType[] = [
  {
    id: 1,
    createdAt: '2024-05-05T22:23:32.440Z',
    updatedAt: '2024-05-05T22:23:32.440Z',
    title: '치킨 할인페이지',
    slug: 'chicken-event',
    status: 'DRAFT',
    uiJson: {},
  },
  {
    id: 2,
    createdAt: '2024-05-05T22:23:32.440Z',
    updatedAt: '2024-05-05T22:23:32.440Z',
    title: '치킨 할인페이지 2222',
    slug: 'chicken-event',
    status: 'DRAFT',
    uiJson: {},
  },
]

export default function ListPage() {
  const { data, isLoading } = usePages()
  const router = useRouter()
  console.log(data)

  return (
    <Container title="대쉬보드">
      <ul className="w-full flex gap-8 flex-col">
        {dummy.map((item, idx) => (
          <li key={item.id}>
            <DashboardCard item={item} />
          </li>
        ))}
      </ul>
      <Button theme="primary" variant="outline" className="absolute top-10 right-0" onClick={() => router.push(MENU_ROUTER.edit.href)}>
        새로운 페이지 만들기 +
      </Button>
    </Container>
  )
}
