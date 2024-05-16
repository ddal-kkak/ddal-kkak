import useToggleButton from '@/components/hook/useToggle'
import { useUpdateStatus } from '@/hooks/pages'
import { PagesType } from '@/types/pages'
import { Button } from '@ddal-kkak/ui/atoms'
import { MENU_ROUTER } from 'constant/route'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type DashboardCardProps = {
  item: PagesType
}

export default function DashboardCard({ item }: DashboardCardProps) {
  const isPublished = item.status === 'PUBLISHED'
  const router = useRouter()
  const { edit } = MENU_ROUTER
  const { mutateAsync, isPending } = useUpdateStatus(String(item.id))
  const handleClickPublish = async () => {
    const res = await mutateAsync(isPublished ? 'DRAFT' : 'PUBLISHED')
    console.log(res)
  }

  return (
    <div className="w-full max-w-screen-lg min-h-36 rounded border border-neutral-200 flex justify-between">
      <div className="flex-grow flex">
        <div className="h-full aspect-video flex items-center justify-center bg-neutral-100">이미지</div>
        <div className="text-body14 flex-grow flex flex-col gap-4 p-6">
          <h2 className="text-title15">{item.title}</h2>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-400">{item.slug}</p>
            <p className="text-body12">{dayjs(item.createdAt).format('YYYY-MM-DD')} 생성</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-6 items-end">
        <div className="flex items-center gap-4">
          <Button onClick={handleClickPublish} variant={'outline'} theme={isPublished ? 'secondary' : 'gray'}>
            {isPublished ? '배포됨' : '배포하기'}
          </Button>
          <Button variant="solid" onClick={() => router.push(`${edit.href}/${item.id}`)}>
            편집하기
          </Button>
        </div>
        <Button variant="ghost" onClick={() => router.push(`/${item.slug}-${item.id}`)}>
          웹사이트 방문하기
        </Button>
      </div>
    </div>
  )
}
