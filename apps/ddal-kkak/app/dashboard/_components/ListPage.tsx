'use client'
import Container from '@/components/layout/Container'
import { usePages } from '@/hooks/pages'
import { Button } from '@ddal-kkak/ui/atoms'
import DashboardCard from './DashboardCard'
import { PagesType } from '@/types/pages'
import { useRouter } from 'next/navigation'
import { MENU_ROUTER } from 'constant/route'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function ListPage() {
  const { data, isLoading } = usePages()
  const router = useRouter()

  return (
    <Container title="대쉬보드">
      <>
        {isLoading ? (
          <div className="w-full text-center py-10">
            <LoadingSpinner type="sync" />
          </div>
        ) : (
          data && (
            <ul className="w-full flex gap-8 flex-col">
              {(data as PagesType[]).map((item, idx) => (
                <li key={item.id}>
                  <DashboardCard item={item} />
                </li>
              ))}
            </ul>
          )
        )}
        <Button theme="primary" variant="outline" className="absolute top-10 md:right-6 right-4 lg:right-10" onClick={() => router.push(MENU_ROUTER.edit.href)}>
          새로운 페이지 만들기 +
        </Button>
      </>
    </Container>
  )
}
