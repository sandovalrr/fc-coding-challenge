import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Race } from '@f1/shared/models/race'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Skeleton from '@material-ui/lab/Skeleton'
import CardHeader from '@material-ui/core/CardHeader'
import { YearAvatar } from '@f1/components/atoms/YearAvatar'
import { TableNameValueRow } from '@f1/components/atoms/TableNameValueRow'
import FlagIcon from '@material-ui/icons/Flag'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import StarIcon from '@material-ui/icons/Star'
import HistoryIcon from '@material-ui/icons/History'
import { formatDate } from '@f1/shared/helpers/date'

type Props = {
  qaId?: string
  race: Race
  loading: boolean
  highlighted: boolean
}

const useStyles = makeStyles((theme) => ({
  highlight: {
    color: theme.palette.warning.main,
    fontSize: 28,
  },
  title: {
    ...theme.typography.h5,
    paddingBottom: theme.spacing(1),
  },
  subheader: {
    ...theme.typography.h6,
  },
  table: {
    width: '100%',
  },
}))

const RaceCard: React.FC<Props> = ({ race, qaId = 'app', loading, highlighted }) => {
  const classes = useStyles()
  const { raceName, date, url, round, Results } = race
  const [{ Driver, Constructor, Time }] = Results

  const formattedDate = React.useMemo(() => formatDate(date), [date])

  return (
    <Grid
      qa-id={`${qaId}-race-card-${race.season}-${race.round}`}
      item
      xs={12}
      sm={6}
      md={3}
      lg={2}
    >
      <Card>
        <CardHeader
          classes={{ title: classes.title, subheader: classes.subheader }}
          action={highlighted && <StarIcon className={classes.highlight} />}
          title={
            loading ? (
              <Skeleton animation="wave" height={15} width="80%" />
            ) : (
              <a target="_blank" href={url} rel="noopener noreferrer">
                {raceName}
              </a>
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={15} width="80%" />
            ) : (
              <>
                <EventAvailableIcon />
                {formattedDate}
              </>
            )
          }
          avatar={<YearAvatar year={round} loading={loading} />}
        />
        <CardContent>
          {loading ? (
            <>
              <Skeleton animation="wave" height={25} width="100%" />
              <Skeleton animation="wave" height={25} width="100%" />
              <Skeleton animation="wave" height={25} width="100%" />
              <Skeleton animation="wave" height={25} width="100%" />
            </>
          ) : (
            <table className={classes.table}>
              <tbody>
                <TableNameValueRow
                  name="Driver"
                  value={
                    <a target="_blank" href={Driver.url} rel="noopener noreferrer">
                      {`${Driver.givenName} ${Driver.familyName}`}
                    </a>
                  }
                />
                <TableNameValueRow
                  name="Team"
                  value={
                    <a target="_blank" href={Constructor.url} rel="noopener noreferrer">
                      {Constructor.name}
                    </a>
                  }
                />
                <TableNameValueRow
                  name="Nationality"
                  value={
                    <>
                      <FlagIcon />
                      {Driver.nationality}
                    </>
                  }
                />
                <TableNameValueRow
                  name="Time"
                  value={
                    <>
                      <HistoryIcon />
                      {Time.time}
                    </>
                  }
                />
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

export { RaceCard }
