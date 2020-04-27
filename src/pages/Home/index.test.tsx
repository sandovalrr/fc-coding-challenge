import React from 'react'

import { FetchMock } from 'jest-fetch-mock'
import { render, waitForDomChange, fireEvent } from '@testing-library/react'

import { Home } from '.'

const worldChampionsFetchMock = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.4',
    series: 'f1',
    url: 'http://ergast.com/api/f1/driverstandings/1.json',
    limit: '11',
    offset: '55',
    total: '70',
    StandingsTable: {
      driverStandings: '1',
      StandingsLists: [
        {
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
        },
        {
          season: '2006',
          round: '18',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '134',
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
        },
        {
          season: '2007',
          round: '17',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '110',
              wins: '6',
              Driver: {
                driverId: 'raikkonen',
                permanentNumber: '7',
                code: 'RAI',
                url: 'http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
                givenName: 'Kimi',
                familyName: 'Räikkönen',
                dateOfBirth: '1979-10-17',
                nationality: 'Finnish',
              },
              Constructors: [
                {
                  constructorId: 'ferrari',
                  url: 'http://en.wikipedia.org/wiki/Scuderia_Ferrari',
                  name: 'Ferrari',
                  nationality: 'Italian',
                },
              ],
            },
          ],
        },
        {
          season: '2008',
          round: '18',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '98',
              wins: '5',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British',
              },
              Constructors: [
                {
                  constructorId: 'mclaren',
                  url: 'http://en.wikipedia.org/wiki/McLaren',
                  name: 'McLaren',
                  nationality: 'British',
                },
              ],
            },
          ],
        },
        {
          season: '2009',
          round: '17',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '95',
              wins: '6',
              Driver: {
                driverId: 'button',
                permanentNumber: '22',
                code: 'BUT',
                url: 'http://en.wikipedia.org/wiki/Jenson_Button',
                givenName: 'Jenson',
                familyName: 'Button',
                dateOfBirth: '1980-01-19',
                nationality: 'British',
              },
              Constructors: [
                {
                  constructorId: 'brawn',
                  url: 'http://en.wikipedia.org/wiki/Brawn_GP',
                  name: 'Brawn',
                  nationality: 'British',
                },
              ],
            },
          ],
        },
        {
          season: '2010',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '256',
              wins: '5',
              Driver: {
                driverId: 'vettel',
                permanentNumber: '5',
                code: 'VET',
                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                givenName: 'Sebastian',
                familyName: 'Vettel',
                dateOfBirth: '1987-07-03',
                nationality: 'German',
              },
              Constructors: [
                {
                  constructorId: 'red_bull',
                  url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                  name: 'Red Bull',
                  nationality: 'Austrian',
                },
              ],
            },
          ],
        },
        {
          season: '2011',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '392',
              wins: '11',
              Driver: {
                driverId: 'vettel',
                permanentNumber: '5',
                code: 'VET',
                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                givenName: 'Sebastian',
                familyName: 'Vettel',
                dateOfBirth: '1987-07-03',
                nationality: 'German',
              },
              Constructors: [
                {
                  constructorId: 'red_bull',
                  url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                  name: 'Red Bull',
                  nationality: 'Austrian',
                },
              ],
            },
          ],
        },
        {
          season: '2012',
          round: '20',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '281',
              wins: '5',
              Driver: {
                driverId: 'vettel',
                permanentNumber: '5',
                code: 'VET',
                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                givenName: 'Sebastian',
                familyName: 'Vettel',
                dateOfBirth: '1987-07-03',
                nationality: 'German',
              },
              Constructors: [
                {
                  constructorId: 'red_bull',
                  url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                  name: 'Red Bull',
                  nationality: 'Austrian',
                },
              ],
            },
          ],
        },
        {
          season: '2013',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '397',
              wins: '13',
              Driver: {
                driverId: 'vettel',
                permanentNumber: '5',
                code: 'VET',
                url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
                givenName: 'Sebastian',
                familyName: 'Vettel',
                dateOfBirth: '1987-07-03',
                nationality: 'German',
              },
              Constructors: [
                {
                  constructorId: 'red_bull',
                  url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
                  name: 'Red Bull',
                  nationality: 'Austrian',
                },
              ],
            },
          ],
        },
        {
          season: '2014',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '384',
              wins: '11',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British',
              },
              Constructors: [
                {
                  constructorId: 'mercedes',
                  url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                  name: 'Mercedes',
                  nationality: 'German',
                },
              ],
            },
          ],
        },
        {
          season: '2015',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '381',
              wins: '10',
              Driver: {
                driverId: 'hamilton',
                permanentNumber: '44',
                code: 'HAM',
                url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                givenName: 'Lewis',
                familyName: 'Hamilton',
                dateOfBirth: '1985-01-07',
                nationality: 'British',
              },
              Constructors: [
                {
                  constructorId: 'mercedes',
                  url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                  name: 'Mercedes',
                  nationality: 'German',
                },
              ],
            },
          ],
        },
      ],
    },
  },
}

describe('<Home />', () => {
  const fetchMock = fetch as FetchMock

  afterEach(() => {
    fetchMock.mockClear()
  })

  const renderComponent = (props: Partial<React.ComponentProps<typeof Home>> = {}) => {
    return render(<Home {...props} />)
  }

  test('it should render each champion fetched', async () => {
    fetchMock.mockResponse(JSON.stringify(worldChampionsFetchMock))
    const { getByTestId, container } = renderComponent()
    const {
      MRData: { StandingsTable },
    } = worldChampionsFetchMock

    await waitForDomChange({ container })
    StandingsTable.StandingsLists.forEach((champion) => {
      const component = getByTestId(
        `card-action-${champion.season}-${champion.round}-${champion.DriverStandings[0].Driver.driverId}`,
      )
      expect(component).toBeInTheDocument()
      fireEvent.click(component)
    })
  })
})
