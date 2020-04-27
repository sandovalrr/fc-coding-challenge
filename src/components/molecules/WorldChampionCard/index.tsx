import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import { Standing } from '@f1/shared/models/standing'
import { YearAvatar } from '@f1/components/atoms/YearAvatar'
import { TableNameValueRow } from '@f1/components/atoms/TableNameValueRow'
import FlagIcon from '@material-ui/icons/Flag'
import StarIcon from '@material-ui/icons/Star'
import Skeleton from '@material-ui/lab/Skeleton'

type Props = {
  loading?: boolean
  standing: Standing
  onClick?: (item: Standing) => void
}

const useStyles = makeStyles((theme) => ({
  highlight: {
    color: theme.palette.warning.main,
  },
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

const WorldChampionCard: React.FC<Props> = ({
  standing,
  loading,
  standing: { season, round, DriverStandings },
  onClick,
}) => {
  const [{ Driver, wins, points, Constructors }] = DriverStandings
  const [team] = Constructors
  const classes = useStyles()

  const stopPropagation = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.stopPropagation()
    },
    [],
  )

  const handleClick = React.useCallback(() => {
    if (!onClick) return
    onClick(standing)
  }, [onClick, standing])

  return (
    <Grid item xs={12} sm={6} md={3} lg={2} qa-id={`card-${season}-${round}-${Driver.driverId}`}>
      <Card>
        <CardActionArea
          onClick={handleClick}
          qa-id={`card-action-${season}-${round}-${Driver.driverId}`}
        >
          <CardHeader
            classes={{ title: classes.title, subheader: classes.subheader }}
            avatar={
              <YearAvatar qaId={`world-champion-card-${season}`} year={season} loading={loading} />
            }
            title={
              loading ? (
                <Skeleton animation="wave" height={10} width="80%" />
              ) : (
                <a
                  target="_blank"
                  href={Driver.url}
                  rel="noopener noreferrer"
                  onClick={stopPropagation}
                >
                  {Driver.givenName} {Driver.familyName}
                </a>
              )
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="80%" />
              ) : (
                <>
                  <FlagIcon />
                  {Driver.nationality}
                </>
              )
            }
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
                  <TableNameValueRow name="Year" value={season} />
                  <TableNameValueRow
                    name="Team"
                    value={
                      <a
                        target="_blank"
                        href={team.url}
                        rel="noopener noreferrer"
                        onClick={stopPropagation}
                      >
                        {team.name}
                      </a>
                    }
                  />
                  <TableNameValueRow name="Points" value={points} />
                  <TableNameValueRow
                    name="Wins"
                    value={
                      <>
                        {wins}
                        <StarIcon className={classes.highlight} />
                      </>
                    }
                  />
                </tbody>
              </table>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export { WorldChampionCard }
