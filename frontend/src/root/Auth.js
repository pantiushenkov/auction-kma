import React from 'react'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import ErrorBoundary from '../components/ErrorBoundary'

const locationHelper = locationHelperBuilder({})

export const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one,
  // or to the wholesalers page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/home',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // If selector is true, wrapper will not redirect
  // So if there user is not logged in then we show the page
  authenticatedSelector: ({ session: { isLoggedIn } }) => isLoggedIn === false,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated',
})

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: ({ session: { isLoggedIn } }) => isLoggedIn,
  wrapperDisplayName: 'UserIsAuthenticated',
})

// other restriction can be added as well in the future if needed

/*
export const userIsAdmin = connectedRouterRedirect({
  redirectPath: '/',
  allowRedirectBack: false,
  authenticatedSelector: state => user === admin,
  predicate: user => user.isAdmin,
  wrapperDisplayName: 'UserIsAdmin'
})
*/

export const WithAuth = () => {
  const { children } = this.props
  return (
    <div>
      {React.Children.map(children, element =>
        (
          <ErrorBoundary>
            {React.cloneElement(element, {
              component: userIsAuthenticated(element.props.component),
            })}
          </ErrorBoundary>))}
    </div>
  )
}
