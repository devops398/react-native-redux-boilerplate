import React, { Component, PropTypes } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { FabricWrapper } from '@components/fabric_answers_wrapper'

import Actions from '@actions/creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { PresentationPage, LoginForm, LogoLabel } from '../compositions/presentation'

class PresentationScreen extends Component {

  static propTypes = {
    login:    PropTypes.func,
    register: PropTypes.func
  }

  state = {
    username: '',
    password: ''
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting            = true
    // attempt a login - a saga is listening to pick it up from here.
    console.log(this.props)
//    this.props.home()
    this.props.attemptLogin('username', 'password')
  }

  handleChangeUsername = ( text ) => {
    this.setState({ username: text })
  }

  handleChangePassword = ( text ) => {
    this.setState({ password: text })
  }

  render() {
    return (
      <PresentationPage>
        <View style={{ flex: 1 }}/>
        <LogoLabel />
        <View style={{ flex: 1 }}/>
        <LoginForm login={this.handlePressLogin}/>
      </PresentationPage>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {}
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    login:        NavigationActions.login,
    register:     NavigationActions.register,
    attemptLogin: ( username, password ) => dispatch(Actions.requestLogin(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(FabricWrapper(PresentationScreen, "Presentation Screen", "Container", PresentationScreen.name))
