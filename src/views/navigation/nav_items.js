import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import styles from './styles/nav_items.style'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Entypo'
import { Colors, Metrics, Images } from '@themes'

const toggleDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: value => !value
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop} style={{marginTop: Metrics.smallMargin, marginLeft: Metrics.smallMargin}}>
        <Icon name="chevron-thin-left" size={Metrics.icons.tiny} color={Colors.black} />
      </TouchableOpacity>
    )
  },

  blaclBackButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop} style={{marginTop: Metrics.smallMargin, marginLeft: Metrics.smallMargin}}>
        <Icon name="chevron-thin-left" size={Metrics.icons.tiny} color={Colors.black} />
      </TouchableOpacity>
    )
  },

  homeButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Image
              source={Images.bell_icon}
              width={Metrics.icons.tiny}
              resizeMode='contain'
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="chevron-thin-left" size={Metrics.icons.tiny} color={Colors.black} />
      </TouchableOpacity>
      </View>
    )
  },

  logo (){
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Icon name="chevron-thin-left" size={Metrics.icons.tiny} color={Colors.black} />
      </View>
    )
  }
}
