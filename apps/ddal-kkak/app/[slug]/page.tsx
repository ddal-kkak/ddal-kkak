import { generatePageMetadata } from '@/lib/util/generatePageMetadata'
import { MENU_ROUTER } from 'constant/route'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'
import { getPage } from 'service/pages'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const segments = slug.split('-')
  const id = segments.pop()
  const page = await getPage(id)
  if (page && page.metaTagList) return generatePageMetadata(page.metaTagList)
}

export default async function page({ params }: Props) {
  const { slug } = params
  const segments = slug.split('-')
  const id = segments.pop()
  const page = await getPage(id)

  if (!id || !page) redirect(MENU_ROUTER.dashboard.href)

  return <div>{JSON.stringify(page)}</div>
}
