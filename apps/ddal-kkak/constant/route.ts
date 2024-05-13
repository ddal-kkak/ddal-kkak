import IconDashboardFill from '@/components/ui/icons/IconDashboardFill'
import IconDashboardOutline from '@/components/ui/icons/IconDashboardOutline'
import IconEditFill from '@/components/ui/icons/IconEditFill'
import IconEditOutline from '@/components/ui/icons/IconEditOutline'
import IconHomeFill from '@/components/ui/icons/IconHomeFill'
import IconHomeOutline from '@/components/ui/icons/IconHomeOutline'
import React, { ReactNode } from 'react'

type MenuRouterKey = 'home' | 'dashboard' | 'edit'
type DefaultRouterKey = 'preview'

type MenuRouter = {
  type: 'MENU'
  value: string
  href: string
  Icon: React.FC
  ClickedIcon: React.FC
  isClicked: (pathname: string) => boolean
  title: string
}

type DefaultRouter = {
  type: 'ROUTER'
  value: string
  href: string
  title: string
}

type Router = {
  [key: string]: MenuRouter | DefaultRouter
}

export const MENU_ROUTER: {
  [key in MenuRouterKey]: MenuRouter
} = {
  home: {
    type: 'MENU',
    value: 'home',
    href: '/',
    Icon: IconHomeOutline,
    ClickedIcon: IconHomeFill,
    title: '홈',
    isClicked: (pathname: string) => pathname === '/',
  },
  dashboard: {
    type: 'MENU',
    value: 'dashboard',
    href: '/dashboard',
    Icon: IconDashboardOutline,
    ClickedIcon: IconDashboardFill,
    title: '대쉬보드',
    isClicked: (pathname: string) => pathname.startsWith('/dashboard'),
  },
  edit: {
    type: 'MENU',
    value: 'edit',
    href: '/edit/block',
    Icon: IconEditOutline,
    ClickedIcon: IconEditFill,
    title: '에디터',
    isClicked: (pathname: string) => pathname.startsWith('/edit'),
  },
}

export const DEFAULT_ROUTER: {
  [key in DefaultRouterKey]: DefaultRouter
} = {
  preview: {
    type: 'ROUTER',
    value: 'preview',
    href: '/preview',
    title: '미리보기',
  },
}
export const MENU: Router = {
  ...MENU_ROUTER,
  ...DEFAULT_ROUTER,
}
