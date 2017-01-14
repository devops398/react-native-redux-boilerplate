import { fork } from 'redux-saga/effects'
import API from '../services/api'
import FixtureAPI from '../services/fixture_api'
import login from './login'
import getProfile from './profile'
import DebugSettings from '../../config/debug_settings'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(login(api).watcher)
  yield fork(getProfile(api).watcher)
}
