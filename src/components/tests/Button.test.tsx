import Button from '../Button'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Button Test', () => {
  it('default', () => {
    const button = render(<Button>button</Button>).getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-blue-400')
    expect(button).toHaveClass('w-20 h-8')
    expect(button).toHaveClass('rounded')
    expect(button).toHaveClass('hover:opacity-90')
    expect(button).toHaveTextContent('button')
    expect(button).toHaveProperty('type', 'button')
  })

  it('Click', () => {
    const onClick = jest.fn()
    const button = render(<Button onClick={onClick}>button</Button>).getByRole(
      'button'
    )

    fireEvent.click(button)
    expect(onClick).toBeCalled()
    fireEvent.click(button)
    expect(onClick).toBeCalledTimes(2)
  })
})
