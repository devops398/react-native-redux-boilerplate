import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import RoundedButton from '@components/rounded_button'
import i18n from '@i18n'
import { View } from 'react-native'

export default class SignupButton extends Component {
  render() {
    return (
      <RoundedButton
        style={[ApplicationStyles.flat_button, { backgroundColor: Colors.black }]}
        textColor={Colors.white}
        onPress={this.props.onPress}
        text={i18n.t('createAnAccount')}
      />
    )
  }
}
