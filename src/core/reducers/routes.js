import Types from '../actions/types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { StackNavigator } from 'react-navigation';

import { Actions } from 'react-native-router-flux'
import { NavigationActions } from 'react-navigation'
import AppNavigator from '@navigation';

export const INITIAL_STATE = Immutable({
  navigation: {index: 0}
})

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_SUCCESS]: (state, action) => navReducer(state, {routeName: 'Presentation'}),
  [Types.PERMIT_PACKS_REQUEST]: (s) => {setTimeout(() => Actions.purchase(), 0); return s;}
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
