import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { appBar as styles } from '../theme/Theme'
import { signOut } from '../redux/SessionState'

export const AppBarComponent = () => (
  <div>
    app bar
  </div>
)

export default withStyles(styles)(connect(
  ({ routing, session }) => ({
    pathname: routing.location.pathname,
    session,
  }),
  dispatch => ({
    signOut: bindActionCreators(signOut, dispatch),
  }),
)(AppBarComponent))
