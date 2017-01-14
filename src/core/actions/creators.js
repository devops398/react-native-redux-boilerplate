import Types from './types'

const logout = () => ({ type: Types.LOGOUT })
const startup = () => ({ type: Types.STARTUP })

const requestLogin = (username, password) => ({ type: Types.LOGIN_REQUEST, username, password })
const loginSuccess = (username) => ({ type: Types.LOGIN_SUCCESS, username })
const loginFailure = (errorCode) => ({ type: Types.LOGIN_FAILURE, errorCode })

const requestProfile = () => ({ type: Types.PROFILE_REQUEST })
const receiveProfile = (profile) => ({ type: Types.PROFILE_RECEIVE, profile: profile })
const receiveProfileFailure = (code) => ({ type: Types.PROFILE_FAILURE, errorCode: code })


/**
 Makes available all the action creators we've created.
 */
export default {
  requestLogin,
  loginSuccess,
  loginFailure,

  logout,

  startup,

  requestProfile,
  receiveProfile,
  receiveProfileFailure
}
