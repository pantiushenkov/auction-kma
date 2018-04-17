import ls from '../utils/LocalStorage'
import { SIGN_OUT, SESSION_STATE } from './ActionTypes'

const initialState = {
  isLoggedIn: false,
  isConnected: false,
}

export const signOut = () => ({
  type: SIGN_OUT,
})

const sessionReducers = {
  [SESSION_STATE]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [SIGN_OUT]: (state) => {
    ls.remove('token')
    ls.remove('name')
    ls.remove('email')
    return {
      ...state,
      isLoggedIn: false,
      name: '',
      email: '',
    }
  },
}

export const sessionRootReducer = (state = initialState, action) => {
  const reducer = sessionReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
