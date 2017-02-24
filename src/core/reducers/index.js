import { combineReducers } from 'redux'
import LoginReducer from './login'
import Profile from './profile'
import Navigation from './routes'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login:    LoginReducer,
  profile:  Profile,
  navigation:   Navigation
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login', 'password']
// OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
// export const persistentStoreWhitelist = []
