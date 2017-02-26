import Types from '../actions/types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  feed: [
    {
      avatar_url: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Eva027.jpg',
      name: 'ikari shinji'
    },
    {
      avatar_url: 'https://s-media-cache-ak0.pinimg.com/originals/ee/45/90/ee4590e83a89ab5885b4999e0e9a3bcb.jpg',
      name: 'Kaworu Nagisa'
    }
  ]
})

// login attempts
const request = (state, action) =>
  state.merge({ requesting: true })

// successful logins
const success = (state, action) =>
  state.merge({ requesting: false, errorCode: null, profile: action.profile })

// login failure
const failure = (state, action) =>
  state.merge({ requesting: false, errorCode: action.errorCode })

// logout
const logout = (state, action) =>
  state.merge({ username: null })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.NEWS_REQUEST]: request,
  [Types.NEWS_SUCCESS]: success,
  [Types.NEWS_FAILURE]: failure,
  [Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
