import React from 'react'

import { render } from '@testing-library/react'
import { Standing } from '@f1/shared/models/standing'

import { WorldChampionCard } from '.'

const record: Readonly<Standing> = {
  season: '2005',
  round: '19',
  DriverStandings: [
    {
      position: '1',
      positionText: '1',
      points: '133',
      wins: '7',
      Driver: {
        driverId: 'alonso',
        permanentNumber: '14',
        code: 'ALO',
        url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
        givenName: 'Fernando',
        familyName: 'Alonso',
        dateOfBirth: '1981-07-29',
        nationality: 'Spanish',
      },
      Constructors: [
        {
          constructorId: 'renault',
          url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
          name: 'Renault',
          nationality: 'French',
        },
      ],
    },
  ],
}

describe('<WorldChampionCard />', () => {
  const renderComponent = (props: Partial<React.ComponentProps<typeof WorldChampionCard>> = {}) => {
    return render(
      <table>
        <tbody>
          <WorldChampionCard standing={record} {...props} />
        </tbody>
      </table>,
    )
  }

  test('should render card item', () => {
    const { getByTestId } = renderComponent()

    expect(getByTestId('card-2005-19-alonso')).toBeInTheDocument()
  })

  test('should render complete Driver name', () => {
    const { getByText } = renderComponent()

    expect(getByText('Fernando Alonso')).toBeInTheDocument()
  })

  test('should render Driver nationality', () => {
    const { getByText } = renderComponent()

    expect(getByText('Spanish')).toBeInTheDocument()
  })
})
