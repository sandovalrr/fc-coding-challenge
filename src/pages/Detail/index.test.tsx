import React from 'react'

import { FetchMock } from 'jest-fetch-mock'
import { render, waitForDomChange, fireEvent } from '@testing-library/react'

import { Detail } from '.'

const winner = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.4',
    series: 'f1',
    url: 'http://ergast.com/api/f1/2005/driverstandings/1.json',
    limit: '30',
    offset: '0',
    total: '1',
    StandingsTable: {
      season: '2005',
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
      ],
    },
  },
}

const races = {
  MRData: {
    xmlns: 'http://ergast.com/mrd/1.4',
    series: 'f1',
    url: 'http://ergast.com/api/f1/2005/results/1.json',
    limit: '30',
    offset: '0',
    total: '19',
    RaceTable: {
      season: '2005',
      position: '1',
      Races: [
        {
          season: '2005',
          round: '1',
          url: 'http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix',
          raceName: 'Australian Grand Prix',
          Circuit: {
            circuitId: 'albert_park',
            url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
            circuitName: 'Albert Park Grand Prix Circuit',
            Location: {
              lat: '-37.8497',
              long: '144.968',
              locality: 'Melbourne',
              country: 'Australia',
            },
          },
          date: '2005-03-06',
          time: '14:00:00Z',
          Results: [
            {
              number: '6',
              position: '1',
              positionText: '1',
              points: '10',
              Driver: {
                driverId: 'fisichella',
                code: 'FIS',
                url: 'http://en.wikipedia.org/wiki/Giancarlo_Fisichella',
                givenName: 'Giancarlo',
                familyName: 'Fisichella',
                dateOfBirth: '1973-01-14',
                nationality: 'Italian',
              },
              Constructor: {
                constructorId: 'renault',
                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                name: 'Renault',
                nationality: 'French',
              },
              grid: '1',
              laps: '57',
              status: 'Finished',
              Time: {
                millis: '5057336',
                time: '1:24:17.336',
              },
              FastestLap: {
                rank: '2',
                lap: '55',
                Time: {
                  time: '1:25.994',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '222.001',
                },
              },
            },
          ],
        },
        {
          season: '2005',
          round: '2',
          url: 'http://en.wikipedia.org/wiki/2005_Malaysian_Grand_Prix',
          raceName: 'Malaysian Grand Prix',
          Circuit: {
            circuitId: 'sepang',
            url: 'http://en.wikipedia.org/wiki/Sepang_International_Circuit',
            circuitName: 'Sepang International Circuit',
            Location: {
              lat: '2.76083',
              long: '101.738',
              locality: 'Kuala Lumpur',
              country: 'Malaysia',
            },
          },
          date: '2005-03-20',
          time: '15:00:00Z',
          Results: [
            {
              number: '5',
              position: '1',
              positionText: '1',
              points: '10',
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
              Constructor: {
                constructorId: 'renault',
                url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                name: 'Renault',
                nationality: 'French',
              },
              grid: '1',
              laps: '56',
              status: 'Finished',
              Time: {
                millis: '5493736',
                time: '1:31:33.736',
              },
              FastestLap: {
                rank: '4',
                lap: '18',
                Time: {
                  time: '1:35.899',
                },
                AverageSpeed: {
                  units: 'kph',
                  speed: '208.081',
                },
              },
            },
          ],
        },
      ],
    },
  },
}

describe('<Detail />', () => {
  const fetchMock = fetch as FetchMock
  afterEach(() => {
    fetchMock.mockClear()
  })

  const renderComponent = (props: Partial<React.ComponentProps<typeof Detail>> = {}) => {
    return render(<Detail {...props} />)
  }

  test('it should render each race fetched', async () => {
    fetchMock.mockResponses(
      [JSON.stringify(winner), { status: 200 }],
      [JSON.stringify(races), { status: 200 }],
    )
    const { getByTestId, container } = renderComponent()
    const {
      MRData: {
        RaceTable: { Races },
      },
    } = races

    await waitForDomChange({ container })
    Races.forEach(({ season, round }) => {
      expect(getByTestId(`app-race-card-${season}-${round}`)).toBeInTheDocument()
    })
  })
})
