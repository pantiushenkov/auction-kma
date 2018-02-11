import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../redux'

function configureStoreProd (initialState) {
  return createStore(
    rootReducer,
    initialState,
 )
}

function configureStoreDev (initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
  const store = createStore(
    rootReducer,
    initialState,
  )

  if (module.hot) {
    module.hot.accept('../redux', () => {
      const nextReducer = require('../redux').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
