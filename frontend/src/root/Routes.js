import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { WithAuth } from './Auth'

export class Routes extends Component {
  shouldComponentUpdate(nextProps) {
    const {
      session: { isLoggedIn: nextLoggedIn },
      location: { pathname: nextPathName },
    } = nextProps
    const { session: { isLoggedIn }, location: { pathname } } = this.props
    /* returns true only when pathname change happen (we move to another page) or signIn state changes */
    return nextLoggedIn !== isLoggedIn || pathname !== nextPathName
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" /> {/* TODO component={userIsNotAuthenticated(SignIn)} */}
        <WithAuth />
      </Switch>
    )
  }
}

export default withRouter(connect(
  state => ({
    session: state.session,
    routing: state.routing,
  }),
  dispatch => ({
    push: bindActionCreators(push, dispatch),
  }),
)(Routes))
