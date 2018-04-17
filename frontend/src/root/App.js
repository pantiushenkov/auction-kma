/* eslint-disable import/no-named-as-default */
import React from 'react'
import { withStyles } from 'material-ui/styles'

import Routes from './Routes'
import AppBar from './AppBar'
import { rootStyle as styles } from '../theme/Theme'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

export const App = () => {
  const { classes } = this.props
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar />
        <div className={classes.content}>
          <Routes />
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(App)
