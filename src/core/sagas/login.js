import { take, put, call } from 'redux-saga/effects'
import Types from '../actions/types'
import Actions from '../actions/creators'

export default ( api ) => {

  function * worker(username, password)
  {
    if (password === '') {
      // dispatch failure
      yield put(Actions.loginFailure('WRONG'))
    } else {
      // dispatch successful logins
      yield put(Actions.loginSuccess(username))
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