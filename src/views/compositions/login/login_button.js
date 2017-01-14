import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import RoundedButton from '@components/rounded_button'
import i18n from '@i18n'
import { View } from 'react-native'

export default class LoginButton extends Component {
  render() {
    return (
      <RoundedButton
        onPress={this.props.onPress}
        text={i18n.t('login')}
        style={[ApplicationStyles.flat_button, { backgroundColor: Colors.white }]}
      />
    )
  }
}
