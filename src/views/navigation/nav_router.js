import React, { Component } from 'react'
import { Scene, Router, Switch } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Styles from './styles/nav_container.style'
import NavigationDrawer from './nav_drawer'
import NavItems from './nav_items'
import i18n from '@i18n'

// screens identified by the router
import PresentationScreen from '../containers/presentation_screen'
import LoginScreen from '../containers/login_screen'

class NavigationRouter extends Component {
  render() {
    return (
      <Router renderBackButton={NavItems.backButton}>
        <Scene key='drawer' component={NavigationDrawer} renderBackButton={NavItems.backButton}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title}
                 leftButtonIconStyle={Styles.leftButton} renderBackButton={NavItems.backButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentation' component={PresentationScreen} renderRightButton={NavItems.backButton}
                   renderBackButton={NavItems.hamburgerButton} renderTitle={NavItems.logo} hideNavBar={false} />
            <Scene key='login' component={LoginScreen} title='Login' renderRightButton={NavItems.backButton}
                   renderBackButton={NavItems.hamburgerButton} renderTitle={NavItems.logo} hideNavBar={false} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
