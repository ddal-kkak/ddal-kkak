import React from 'react'
import IconHomeOutline from './ui/icons/IconHomeOutline'
import IconHomeFill from './ui/icons/IconHomeFill'
import IconDashboardOutline from './ui/icons/IconDashboardOutline'
import IconDashboardFill from './ui/icons/IconDashboardFill'
import IconEditOutline from './ui/icons/IconEditOutline'
import IconEditFill from './ui/icons/IconEditFill'

export default function Menu() {
  return {
    home: {
      value: 'home',
      href: '/',
      icon: <IconHomeOutline />,
      clickedIcon: <IconHomeFill />,
      title: '홈',
      isShow: true,
      isClicked: (pathname: string) => pathname === '/',
    },
    dashboard: {
      value: 'dashboard',
      href: '/list',
      icon: <IconDashboardOutline />,
      clickedIcon: <IconDashboardFill />,
      title: '대쉬보드',
      isShow: true,
      isClicked: (pathname: string) => pathname.startsWith('/list'),
    },
    edit: {
      value: 'edit',
      href: '/edit/block',
      icon: <IconEditOutline />,
      clickedIcon: <IconEditFill />,
      title: '에디터',
      isShow: true,
      isClicked: (pathname: string) => pathname.startsWith('/edit/block'),
    },
    preview: {
      value: 'preview',
      href: '/preview',
      icon: <></>,
      clickedIcon: <></>,
      title: '미리보기',
      isShow: false,
      isClicked: (pathname: string) => pathname.startsWith('/edit/block'),
    },
  }
}
