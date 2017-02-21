import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import { View } from 'react-native'

export default class PresentationPage extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}
