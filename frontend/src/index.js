/* eslint-disable import/default,global-require */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/ConfigureStore'
import { Root } from './root'
import './styles/styles.scss'

const store = configureStore()

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app'),
)

if (module.hot) {
  module.hot.accept('./root', () => {
    const NewRoot = require('./root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app'),
    )
  })
}
