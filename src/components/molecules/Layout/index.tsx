import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

type Props = {
  title: string
  showBackButton?: boolean
  onBackButtonClicked?: () => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  icon: {
    fontSize: theme.typography.h4.fontSize,
    marginRight: theme.spacing(2)
  },
}))

const Layout: React.FC<Props> = ({ children, showBackButton, title, onBackButtonClicked }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {!showBackButton && <HomeIcon className={classes.icon}/>}
          {showBackButton && (
            <IconButton onClick={onBackButtonClicked} className={classes.icon}>
              <ArrowBackIosIcon />
            </IconButton>
          )}
          <Typography variant="h4" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}

export { Layout }
