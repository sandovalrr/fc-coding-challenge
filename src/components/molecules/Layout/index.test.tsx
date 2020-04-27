import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import { Layout } from '.'

describe('<Layout />', () => {
  const renderComponent = (props: Partial<React.ComponentProps<typeof Layout>> = {}) => {
    return render(<Layout title="Test" {...props} />)
  }

  test('should get qa-ids from components', () => {
    const { getByTestId } = renderComponent()

    expect(getByTestId('app-root')).toBeInTheDocument()
    expect(getByTestId('app-toolbar')).toBeInTheDocument()
    expect(getByTestId('app-home-icon')).toBeInTheDocument()
    expect(getByTestId('app-title')).toBeInTheDocument()
    expect(getByTestId('app-content')).toBeInTheDocument()
  })

  test('should render "Home" as title', () => {
    const { getByText } = renderComponent({ title: 'Home' })

    expect(getByText('Home')).toBeInTheDocument()
  })

  test('should render back button icon', () => {
    const { getByTestId } = renderComponent({
      title: 'Back Button',
      showBackButton: true,
    })

    const button =getByTestId('app-go-back-button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
