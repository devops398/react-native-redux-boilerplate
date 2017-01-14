import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import BackgroundImage from '@components/background_image'
import Spinner from '@components/spinner'
import { View } from 'react-native'

export default class LoginButton extends Component {
  render() {
    return (
      <BackgroundImage source={Images.background}>
        {this.props.children}
        {this.props.requesting ? <Spinner/> : <View/>}
      </BackgroundImage>
    )
  }
}
