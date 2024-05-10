import { describe, expect, test } from 'vitest'
import Menu from '../components/layout/Menu'

describe('Menu Function', () => {
  test('메뉴 함수가 제대로 메뉴들을 받아오나', () => {
    const menu = Menu()

    expect(menu).toHaveProperty('home')
    expect(menu).toHaveProperty('dashboard')
    expect(menu).toHaveProperty('edit')
    expect(menu).toHaveProperty('preview')

    expect(menu.home).toEqual({
      value: 'home',
      href: '/',
      icon: expect.any(Object),
      clickedIcon: expect.any(Object),
      title: '홈',
      isShow: true,
      isClicked: expect.any(Function),
    })

    expect(menu.home.isClicked('/')).toBe(true)
    expect(menu.home.isClicked('/edit')).toBe(false)
  })

  test('대쉬보드 클릭 잘 작동하나', () => {
    const menu = Menu()
    expect(menu.dashboard.isClicked('/list')).toBe(true)
    expect(menu.dashboard.isClicked('/')).toBe(false)
  })

  test('edit 클릭하면 /edit/block으로 잘 이동하나', () => {
    const menu = Menu()
    expect(menu.edit.isClicked('/edit/block')).toBe(true)
    expect(menu.edit.isClicked('/edit')).toBe(false)
  })
})
