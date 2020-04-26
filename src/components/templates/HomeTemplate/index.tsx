import React from 'react'

import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { Standing } from '@f1/shared/models/standing'
import { WorldChampionList } from '@f1/components/organisisms/WorldChampionList'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  records: Standing[]
  onItemClicked: (record: Standing) => void
}

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2),
  },
}))

const HomeTemplate: React.FC<Props> = ({ records, onItemClicked }) => {
  const classes = useStyles()
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Typography color="textPrimary" variant="h5">
          Home
        </Typography>
      </Breadcrumbs>
      <WorldChampionList records={records} onItemClicked={onItemClicked} />
    </>
  )
}

export { HomeTemplate }
