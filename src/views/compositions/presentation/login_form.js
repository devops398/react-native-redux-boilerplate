import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import i18n from '@i18n'
import { View } from 'react-native'
import SignUpButton from './signup_button'
import LoginButton from './login_button'
import { Card, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <View style={{ paddingBottom: 10 }}>
          <FormLabel>Login</FormLabel>
          <FormInput onChangeText={this.props.onLoginChange}/>
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.props.onPasswordChange}/>
        </View>
        <LoginButton onPress={this.props.login}/>
        <SignUpButton onPress={this.props.register}/>
      </Card>
    )
  }
}
