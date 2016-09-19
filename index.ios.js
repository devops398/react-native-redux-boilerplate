import React from 'react'
import { AppRegistry } from 'react-native'
import Root from './src/root'
import configureStore from './src/core/store/store'


// Forces a native crash for testing
// Handling store here to avoid hot-reloading issues
const store = configureStore()
class ParkingApp extends React.Component {
  render () {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('ReactNativeStarter', () => ParkingApp);
