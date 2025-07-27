import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Logo from './Logo'

describe('<Logo />', () => {
  test('it should mount', () => {
    render(<Logo />)

    const Logo = screen.getByTestId('Logo')

    expect(Logo).toBeInTheDocument()
  })
})
