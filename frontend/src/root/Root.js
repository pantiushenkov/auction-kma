import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes } from './Routes'
import { Layout } from '../Modules/Layout/Layout'

export const Root = (props) => {
  const { store } = props
  return (
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
