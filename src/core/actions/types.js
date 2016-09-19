// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_REQUEST
  LOGIN_SUCCESS
  LOGIN_FAILURE

  REGISTER_REQUEST
  REGISTER_RECEIVE
  REGISTER_FAILURE
  
  PROFILE_REQUEST
  PROFILE_RECEIVE
  PROFILE_FAILURE
  
  CHOOSE_PERMIT_PACK
  
  LOGOUT

  STARTUP
`)
