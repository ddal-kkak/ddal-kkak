'use client'
import TestForm from '@/app/edit/_components/form'
import { PageType } from '@/types/pages'

type EditorBlocksProps = {
  page?: PageType
}

export default function EditorBlocks({ page }: EditorBlocksProps) {
  console.log(page)
  return (
    <div className="w-full aspect-square border border-neutral-200 bg-white rounded-lg p-10">
      <TestForm />
    </div>
  )
}
