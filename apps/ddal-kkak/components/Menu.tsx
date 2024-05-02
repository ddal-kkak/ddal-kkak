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
      isClicked: (pathname: string) => pathname === '/',
    },
    dashboard: {
      value: 'dashboard',
      href: '/list',
      icon: <IconDashboardOutline />,
      clickedIcon: <IconDashboardFill />,
      title: '대쉬보드',
      isClicked: (pathname: string) => pathname.startsWith('/list'),
    },
    edit: {
      value: 'edit',
      href: '/block/edit',
      icon: <IconEditOutline />,
      clickedIcon: <IconEditFill />,
      title: '에디터',
      isClicked: (pathname: string) => pathname.startsWith('/block/edit'),
    },
  }
}
