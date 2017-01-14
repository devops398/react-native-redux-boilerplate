/**
 * @providesModule rounded_button
 */

import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './styles/rounded_button.style'

export default class RoundedButton extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    text:      PropTypes.string,
    textColor: PropTypes.string,
    onPress:   PropTypes.func.isRequired,
    children:  PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    style:     PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  }

  static defaultProps = {
    style: styles.button
  }

  getTextColor() {
    return this.props.textColor || "#000000"
  }

  getStyle() {
    return this.props.textStyle || styles.buttonText
  }

  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        {this.props.children}
        {this.props.icon ? <Image source={this.props.icon} style={this.props.iconStyle} /> : <View />}
        <Text style={[{ color: this.getTextColor() }, this.getStyle()]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
