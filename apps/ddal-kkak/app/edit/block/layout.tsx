import Container from '@/components/layout/Container'
import { MENU_ROUTER } from 'constant/route'
import React, { PropsWithChildren } from 'react'

type EditLayoutProps = {
  children: React.ReactNode
}

export default function EditLayout({ children }: PropsWithChildren<EditLayoutProps>) {
  return <Container title={MENU_ROUTER.edit.title}>{children}</Container>
}
