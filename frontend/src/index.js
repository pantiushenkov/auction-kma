import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

const store = configureStore()
render(
    <AppContainer>
      <App store={store}/>
    </AppContainer>,
    document.getElementById('root')
  )
  
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NewRoot = require('./App').default
      render(
        <AppContainer>
          <NewRoot store={store}/>
        </AppContainer>,
        document.getElementById('root')
      )
    })
  }

registerServiceWorker();
