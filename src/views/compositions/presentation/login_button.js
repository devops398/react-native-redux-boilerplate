import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import i18n from '@i18n'
import { View } from 'react-native'
import {
  Button
} from 'react-native-elements'

export default class LoginButton extends Component {
  render() {
    return (
      <Button
        buttonStyle={ApplicationStyles.button}
        backgroundColor={Colors.green}
        raised
        title={i18n.t('signIn')}
        onPress={this.props.onPress}
      />
    )
  }
}
