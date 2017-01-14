import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '@actions/types'
import Actions from '@actions/creators'

export default (api) => {
  function * worker () {
    yield put(Actions.requestProfile())
    const response = yield call(api.getProfile)

    // success?
    if (response.ok) {
      yield put(Actions.receiveProfile(response.data))
    } else {
      yield put(Actions.receiveProfileFailure())
    }
  }

  function * watcher () {
    while (true) {
      yield take(Types.LOGIN_SUCCESS)
      yield call(worker)
    }
  }

  return {
    worker,
    watcher
  }
}
