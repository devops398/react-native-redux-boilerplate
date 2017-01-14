import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { Images, Metrics } from '@themes'
import { LoginField, LoginButton, LoginPage } from '@compositions/login'

import Actions from '@actions/creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { FabricWrapper } from '@components/fabric_answers_wrapper'

class LoginScreen extends React.Component {

  constructor( props ) {
    super(props)
    this.state        = {
      username:      'developer@citybase.test',
      password:      'password',
      visibleHeight: Metrics.screenHeight,
      topLogo:       { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps( newProps ) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.attempting) {
      this.props.close()
    }
  }

  componentWillMount() {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = ( e ) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo:       {
        width:  100,
        height: 70
      }
    })
  }

  keyboardDidHide = ( e ) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo:       { width: Metrics.screenWidth }
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
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
    const { username, password } = this.state
    const { attempting } = this.props
    const editable = !attempting
    return (
      <LoginPage requesting={this.props.requesting}>
        <LoginField/>
        <View style={{flex: 1}}/>
        <LoginButton onPress={this.handlePressLogin}/>
        <View style={{flex: 1}}/>
      </LoginPage>
    )
  }

}

LoginScreen.propTypes = {
  dispatch:     PropTypes.func,
  attempting:   PropTypes.bool,
  close:        PropTypes.func,
  attemptLogin: PropTypes.func
}

const mapStateToProps = ( state ) => {
  return {
    requesting: state.login.requesting
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    close:        NavigationActions.pop,
    attemptLogin: ( username, password ) => dispatch(Actions.requestLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(FabricWrapper(LoginScreen, "Login Screen", "Container", LoginScreen.name))
