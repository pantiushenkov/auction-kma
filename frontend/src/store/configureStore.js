import io from 'socket.io-client'
import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import createSocketIoMiddleware from 'redux-socket.io'
import ls from '../utils/LocalStorage'
import config from '../config'
// 'routerMiddleware': the new way of storing route changes with Redux middleware since rrV4.
import rootReducer from '../Redux'

export const history = createHistory()

const token = ls.get('token')

export const socket = io(config.apiServerAddress, {
  query: {
    token,
  },
  transports: ['websocket'],
})

socket.on('token', t => ls.save('token', t))

const socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/')

const configureStoreProd = (initialState) => {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    // Add other middleware on this line...
    socketIoMiddleware,
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    reactRouterMiddleware,
  ]

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  )
}

const configureStoreDev = (initialState) => {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    // Add other middleware on this line...
    socketIoMiddleware,
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    logger,
    reactRouterMiddleware,
  ]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../Redux', () => {
      const nextReducer = require('../Redux').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev
