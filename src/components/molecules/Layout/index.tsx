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
    marginRight: theme.spacing(2),
  },
  content: {
    height: '100vh',
    marginTop: theme.spacing(8),
    padding: theme.spacing(1),
    overflow: 'auto',
  },
}))

const Layout: React.FC<Props> = ({ children, showBackButton, title, onBackButtonClicked }) => {
  const classes = useStyles()
  return (
    <div className={classes.root} qa-id="app-root">
      <AppBar className={classes.appBar} qa-id="app-toolbar">
        <Toolbar>
          {!showBackButton && <HomeIcon className={classes.icon} qa-id="app-home-icon" />}
          {showBackButton && (
            <IconButton
              onClick={onBackButtonClicked}
              className={classes.icon}
              qa-id="app-go-back-button"
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          <Typography variant="h4" noWrap qa-id="app-title">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content} qa-id="app-content">
        {children}
      </div>
    </div>
  )
}

export { Layout }
