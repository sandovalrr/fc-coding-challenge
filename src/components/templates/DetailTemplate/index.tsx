import React from 'react'

import { useParams, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2),
  },
}))

const DetailTemplate: React.FC<{}> = () => {
  const classes = useStyles()
  const { season } = useParams()
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
      <div>hola</div>
    </>
  )
}

export { DetailTemplate }
