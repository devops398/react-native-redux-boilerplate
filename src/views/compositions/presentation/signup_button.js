import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import i18n from '@i18n'
import {
  Button
} from 'react-native-elements'

export default class SignupButton extends Component {
  render() {
    return (
      <Button
        buttonStyle={ApplicationStyles.button}
        backgroundColor={Colors.blue}
        raised
        title={i18n.t('signUp')} />
    )
  }
}
