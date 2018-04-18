import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes } from './Routes'

export const Root = (props) => {
  const { store } = props
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
