import React from 'react'

import { render } from '@testing-library/react'

import { TableNameValueRow } from '.'

describe('<TableNameValueRow />', () => {
  const renderComponent = (props: Partial<React.ComponentProps<typeof TableNameValueRow>> = {}) => {
    return render(
      <table>
        <tbody>
          <TableNameValueRow name="Test" value="Test" {...props} />
        </tbody>
      </table>,
    )
  }

  test('should render "Key" as name and "Value" as value', () => {
    const { getByText } = renderComponent({
      name: 'Key',
      value: 'Value',
    })
    expect(getByText('Key:')).toBeInTheDocument()
    expect(getByText('Value')).toBeInTheDocument()
  })
})
