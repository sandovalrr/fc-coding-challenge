import React from 'react'

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Grid from '@material-ui/core/Grid'
import { Race } from '@f1/shared/models/race'
import { Standing } from '@f1/shared/models/standing'
import { RaceCard } from '@f1/components/molecules/RaceCard'
import { RaceList } from '@f1/components/organisisms/RaceList'

type Props = {
  season: string
  races: Race[]
  winner?: Standing
  loading: boolean
}

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2),
  },
}))

const DetailTemplate: React.FC<Props> = ({ loading, races, winner, season }) => {
  const classes = useStyles()
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Link to="/home">
          <Typography variant="h5"> Home</Typography>
        </Link>
        <Typography color="textPrimary" variant="h5">
          Season {season}
        </Typography>
      </Breadcrumbs>
      <RaceList loading={loading} winner={winner} races={races} />
    </>
  )
}

export { DetailTemplate }
