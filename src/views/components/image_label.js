/**
 * @providesModule image_label
 */

import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles/image_label.style'

export default class ImageLabel extends Component {
  static propTypes = {
    navigator:   PropTypes.object,
    upperText:   PropTypes.string,
    bottomText:  PropTypes.string,
    imageStyle:  PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ]),
    upperStyle:  PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    bottomStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ])
  }

  static defaultProps = {
    upperStyle:  styles.upperLabelText,
    bottomStyle: styles.bottomLabelText,
    imageStyle:  styles.image
  }

  render() {
    return (
      <View style={{flex: 1,
        alignItems:     'center',
        justifyContent: 'center'}}>
        {this.props.upperText ? <Text style={this.props.upperStyle}>{this.props.upperText}</Text> : <View/>}
        <Image source={this.props.source} style={this.props.imageStyle}/>
        {this.props.bottomText ? <Text style={this.props.bottomStyle}>{this.props.bottomText}</Text> : <View/>}
      </View>
    )
  }
}
