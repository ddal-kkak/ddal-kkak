import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

test('Page 에 Click me! 라는 버튼이 있냐?', () => {
  render(<Page />)

  const button = expect(
    screen.getByRole('button', {
      name: /마케팅페이지 딸깍 하러가기/i,
    })
  )

  expect(button).toBeDefined()
})
