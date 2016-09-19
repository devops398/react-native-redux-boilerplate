import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/'
import Config from '../../config/debug_settings'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import R from 'ramda'
import Reactotron from 'reactotron'
import devTools from 'remote-redux-devtools'
import ReduxPersist from '../../config/redux_persist'
import Types from '@actions/types'
var Fabric = require('react-native-fabric');
var { Answers } = Fabric;

// the logger master switch
const USE_LOGGING            = Config.reduxLogging
// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']

const actionTransformer = action => {
  console.log('log action')
// All log functions take an optional array of custom attributes as the last parameter
  Answers.logCustom('User action', { action });
  return action
}

// create the logger
const logger = createLogger({
  predicate: ( getState, { type } ) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST)),
             actionTransformer
})

let middleware       = []
const sagaMiddleware = createSagaMiddleware()
const answersLogger  = store => next => action => {
  switch(action.type){
    case Types.LOGIN_SUCCESS:
      Answers.logLogin('Login Success', true)
      break
    case Types.LOGIN_FAILURE:
      Answers.logLogin('Login Success', false)
      break
    case Types.REGISTER_SUCCESS:
      Answers.logSignUp('SignUp Success', false)
      break
  }
  return next(action)
}
const crashLogger    = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Answers.logCustom('Redux error', {
      extra: {
               action,
        state: store.getState()
      }
    });
    throw err
  }
}
middleware.push(sagaMiddleware)
middleware.push(answersLogger)
middleware.push(crashLogger)

// Don't ship these
if (__DEV__) {
  middleware.push(logger)
}

// a function which can create our store and auto-persist the data
export default () => {
  let store = {}

  // Add rehydrate enhancer if ReduxPersist is active
  if (ReduxPersist.active) {
    const enhancers = compose(
      applyMiddleware(...middleware),
      Reactotron.storeEnhancer(),
      autoRehydrate(),
      devTools()
    )

    store = createStore(
      rootReducer,
      enhancers
    )

    // configure persistStore and check reducer version number
    RehydrationServices.updateReducers(store)
  } else {
    const enhancers = compose(
      applyMiddleware(...middleware),
      Reactotron.storeEnhancer()
    )

    store = createStore(
      rootReducer,
      enhancers
    )
  }

  // run sagas
  sagaMiddleware.run(sagas)
  devTools.updateStore(store)
  return store
}
