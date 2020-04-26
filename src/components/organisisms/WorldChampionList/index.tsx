import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Standing } from '@f1/shared/models/standing'
import { WorldChampionCard } from '@f1/components/molecules/WorldChampionCard'

type Props = {
  loading?: boolean
  records: Standing[]
  onItemClicked: (record: Standing) => void
}

const WorldChampionList: React.FC<Props> = ({ records, onItemClicked, loading }) => {
  const items = React.useMemo(
    () =>
      loading
        ? Array(15)
            .fill(null)
            .map<Standing>(
              (_, index) =>
                ({
                  season: `${2000 + index}`,
                  DriverStandings: [{ Driver: {}, Constructors: [{}] }],
                } as Standing),
            )
        : records,
    [loading, records],
  )

  return (
    <Grid container spacing={2}>
      {items.map((record) => (
        <WorldChampionCard
          key={record.season}
          standing={record}
          onClick={onItemClicked}
          loading={loading}
        />
      ))}
    </Grid>
  )
}

export { WorldChampionList }
