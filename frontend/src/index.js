/* eslint-disable import/default,global-require */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { configureStore, history } from './Store/ConfigureStore'
import { Root } from './Root'
import './styles/styles.scss'

const store = configureStore()

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
