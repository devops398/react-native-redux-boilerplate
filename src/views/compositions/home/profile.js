import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import i18n from '@i18n'
import { View, Image, StyleSheet, Text } from 'react-native'
import {
  Button
} from 'react-native-elements'

export default class Profile extends Component {
  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems:     'center',
        flex:           0.3
      }}>
        <Image style={styles.image} source={{ uri: 'https://pp.vk.me/c626426/v626426980/56ebe/CdQmEWe9fSI.jpg' }}/>
        <Text>User Name</Text>
      </View>
    )
  }
}
// styles
const styles = StyleSheet.create({
  image: {
    height:       100,
    borderRadius: 50,
    width:        100
  }
});