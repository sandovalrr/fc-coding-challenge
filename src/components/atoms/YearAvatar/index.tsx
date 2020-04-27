import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton'
import cn from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

type Props = {
  loading?: boolean
  year: number | string
  className?: string
  qaId?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    fontSize: theme.typography.h5.fontSize,
    '&.bg-0': {
      backgroundColor: theme.palette.info.main,
    },
    '&.bg-1': {
      backgroundColor: theme.palette.success.main,
    },
  },
}))

const YearAvatar: React.FC<Props> = ({ className, year, qaId = 'app', loading }) => {
  const classes = useStyles()

  if (loading)
    return (
      <Skeleton
        className={classes.root}
        animation="wave"
        variant="circle"
        qa-id={`${qaId}-year-avatar-skeleton`}
      />
    )

  return (
    <Avatar
      className={cn(classes.root, `bg-${parseInt(year.toString(), 10) % 2}`, className)}
      qa-id={`${qaId}-year-avatar`}
    >
      {year}
    </Avatar>
  )
}

export { YearAvatar }
