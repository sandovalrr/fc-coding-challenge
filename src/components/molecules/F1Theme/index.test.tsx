import React from 'react'

import { render } from '@testing-library/react'
import { useThemeContext } from '@f1/components/hooks/useThemeContext'
import { Themes } from '@f1/settings/theme/config'

import { F1Theme } from '.'

const TestComponent = () => {
  const { theme } = useThemeContext()

  return <span>{theme}</span>
}

describe('<F1Theme />', () => {
  const renderComponent = (props: Partial<React.ComponentProps<typeof F1Theme>> = {}) => {
    return render(
      <F1Theme {...props}>
        <TestComponent />
      </F1Theme>,
    )
  }

  test('should use theme "default"', () => {
    const { getByText } = renderComponent()
    expect(getByText(Themes.Default)).toBeInTheDocument()
  })
})
