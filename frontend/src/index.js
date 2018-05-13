/* eslint-disable import/default,global-require */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './styles/styles.scss'
import App from './App'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
