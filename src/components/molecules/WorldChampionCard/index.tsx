import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Standing } from '@f1/shared/models/standing'
import { YearAvatar } from '@f1/components/atoms/YearAvatar'
import { TableNameValueRow } from '@f1/components/atoms/TableNameValueRow'

type Props = {
  standing: Standing
}

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.h5,
  },
  subheader: {
    ...theme.typography.h6,
  },
  table: {
    width: '100%',
  },
}))

const WorldChampionCard: React.FC<Props> = ({ standing: { season, DriverStandings } }) => {
  const [{ Driver, wins, points, Constructors }] = DriverStandings
  const [team] = Constructors
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Card>
        <CardHeader
          classes={{ title: classes.title, subheader: classes.subheader }}
          avatar={<YearAvatar qaId={`world-champion-card-${season}`} year={season} />}
          title={
            <a target="_blank" href={Driver.url} rel="noopener noreferrer">
              {Driver.givenName} {Driver.familyName}
            </a>
          }
          subheader={Driver.nationality}
        />
        <CardContent>
          <table className={classes.table}>
            <tbody>
              <TableNameValueRow name="Year" value={season} />
              <TableNameValueRow
                name="Team"
                value={
                  <a target="_blank" href={team.url} rel="noopener noreferrer">
                    {team.name}
                  </a>
                }
              />
              <TableNameValueRow name="Points" value={points} />
              <TableNameValueRow name="Wins" value={wins} />
            </tbody>
          </table>
        </CardContent>
      </Card>
    </Grid>
  )
}

export { WorldChampionCard }
