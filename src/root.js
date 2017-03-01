import React, { PropTypes } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Actions from './core/actions/creators'
import DebugSettings from './config/debug_settings'
import { connect } from 'react-redux'

import NavigationRouter from './views/navigation/nav_router'
// import './Config/PushConfig'

// Styles
import { ApplicationStyles } from '@themes'

import crashlytics from 'react-native-fabric-crashlytics';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from '@navigation';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    const { dispatch } = this.props.store
    console.log('fabriq inited')
    crashlytics.init();
    dispatch(Actions.startup())
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={this.props.store}>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle='light-content'
          />
          <AppNavigator
            navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.navigation,
            })}
          />
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}


const mapStateToProps = ( state ) => {
  console.log('mapStateToProps');
  console.log(state);
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(App)