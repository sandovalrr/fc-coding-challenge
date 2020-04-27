import React from 'react'

import { render } from '@testing-library/react'

import { YearAvatar } from '.'

describe('<YearAvatar />', () => {
  const renderComponent = (props: Partial<React.ComponentProps<typeof YearAvatar>> = {}) => {
    return render(<YearAvatar year={2005} {...props} />)
  }

  test('should render 2005 as year', () => {
    const { getByText } = renderComponent({
      year: 2005,
    })

    expect(getByText('2005')).toBeInTheDocument()
  })

  test('should get element by qa-id', () => {
    const { getByTestId } = renderComponent({
      year: 2005,
      qaId: 'test',
    })

    expect(getByTestId('test-year-avatar')).toBeInTheDocument()
  })

  test('should display skeleton', () => {
    const { getByTestId } = renderComponent({
      loading: true,
    })

    expect(getByTestId('app-year-avatar-skeleton')).toBeInTheDocument()
  })
})
