import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    id: '67d98563391819944d30058a',
    text: 'Learn about containers',
    done: false
}

  render(<Todo todo={todo} />)

  const element = screen.getByText('Learn about containers')
  expect(element).toBeDefined()
})


