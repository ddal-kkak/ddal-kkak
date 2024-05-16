import EditorBlocks from '@/components/editor/EditorBlocks'
import EditorButtons from '@/components/editor/EditorButtons'
import EditorComponents from '@/components/editor/EditorComponents'
import HorizonLine from '@/components/ui/HorizonLine'
import { MENU_ROUTER } from 'constant/route'
import { redirect } from 'next/navigation'
import React from 'react'
import { getPage } from 'service/pages'

type Props = {
  params: { slug: string }
}

export default async function PageEditPage({ params }: Props) {
  const { slug } = params
  const page = await getPage(slug)
  if (!page) redirect(MENU_ROUTER.dashboard.href)
  return (
    <div className="w-full flex gap-5 flex-row-reverse">
      <div className="relative w-full shrink-0 basis-1/4 min-w-60 space-y-10 pl-5">
        <EditorButtons />
        <HorizonLine />
        <EditorComponents />
      </div>
      <div className="w-full basis-3/4 min-h-[70vh]">
        <EditorBlocks page={page} />
      </div>
    </div>
  )
}
