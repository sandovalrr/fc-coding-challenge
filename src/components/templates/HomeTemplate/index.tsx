import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Standing } from '@f1/shared/models/standing'
import { WorldChampionCard } from '@f1/components/molecules/WorldChampionCard'

type Props = {
  records: Standing[]
}

const HomeTemplate: React.FC<Props> = ({ records }) => {
  return (
    <Grid
      container
      spacing={2}
    >
      {records.map((record) => (
        <WorldChampionCard key={record.season} standing={record} />
      ))}
    </Grid>
  )
}

export { HomeTemplate }
