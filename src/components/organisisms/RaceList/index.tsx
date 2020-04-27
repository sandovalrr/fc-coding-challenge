import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Race } from '@f1/shared/models/race'
import { RaceCard } from '@f1/components/molecules/RaceCard'
import { Standing } from '@f1/shared/models/standing'

type Props = {
  loading: boolean
  winner?: Standing
  races: Race[]
}

const RaceList: React.FC<Props> = ({ races, loading, winner }) => {
  const items = React.useMemo(
    () =>
      loading
        ? Array(15)
            .fill(null)
            .map<Race>((_, index) => ({ season: `${index}`, Results: [{ Driver: {} }] } as Race))
        : races,
    [races, loading],
  )

  const isHighlighted = React.useCallback(
    (race: Race): boolean => {
      if (!winner) return false
      const {
        Results: [{ Driver }],
      } = race
      const {
        DriverStandings: [{ Driver: wonDriver }],
      } = winner

      return Driver.driverId === wonDriver.driverId
    },
    [winner],
  )

  return (
    <Grid container spacing={2}>
      {items.map((race) => (
        <RaceCard
          key={`${race.season}_${race.round}`}
          race={race}
          highlighted={isHighlighted(race)}
          loading={loading}
        />
      ))}
    </Grid>
  )
}

export { RaceList }
