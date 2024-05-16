'use client'
import TestForm from '@/app/edit/_components/form'
import { usePage } from '@/hooks/pages'
import { PageType } from '@/types/pages'
import { MENU_ROUTER } from 'constant/route'
import { redirect } from 'next/navigation'

type EditorBlocksProps = {
  page?: PageType
}

export default function EditorBlocks({ page }: EditorBlocksProps) {
  const { data, isLoading } = usePage(page)

  return (
    <div className="w-full aspect-square border border-neutral-200 bg-white rounded-lg p-10">
      <TestForm data={data} />
    </div>
  )
}
