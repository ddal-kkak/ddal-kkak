import EditorBlocks from '@/components/editor/EditorBlocks'
import EditorButtons from '@/components/editor/EditorButtons'
import EditorComponents from '@/components/editor/EditorComponents'
import HorizonLine from '@/components/ui/HorizonLine'
import { MENU_ROUTER } from 'constant/route'
import { redirect } from 'next/navigation'
import React from 'react'
import { getPage } from 'service/pages'
import EditorContainer from '../../_components/EditorContainer'

type Props = {
  params: { slug: string }
}

export default async function PageEditPage({ params }: Props) {
  const { slug } = params
  const page = await getPage(slug)
  if (!page) redirect(MENU_ROUTER.dashboard.href)
  return <EditorContainer page={page} />
}
