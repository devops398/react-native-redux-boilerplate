import { take, put, call } from 'redux-saga/effects'
import Types from '../actions/types'
import Actions from '../actions/creators'
import { NavigationActions } from 'react-navigation';

export default ( api ) => {

  function * worker(username, password)
  {
    if (password === '') {
      // dispatch failure
      yield put(Actions.loginFailure('WRONG'))
    } else {
      // dispatch successful logins
      console.log('success')
      yield put(Actions.loginSuccess(username))
      console.log('navigate..')
      yield put({type: NavigationActions.NAVIGATE, routeName: 'Home'})
    }
  }

  function * watcher() {
    // daemonize
    while (true) {
      // wait for LOGIN_ATTEMPT actions to arrive
      const { username, password } = yield take(Types.LOGIN_REQUEST)
      // call attemptLogin to perform the actual work
      yield call(worker, username, password)
    }
  }
  return {
    worker,
    watcher
  }
}