import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from '../components/styles/drawer_content.style'
import { Images } from '@themes'
import DrawerButton from '@components/drawer_button'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggawer()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Edit Profile' onPress={this.handlePressComponents} />
        <DrawerButton text='Request Permit' onPress={this.handlePressDevice} />
        <DrawerButton text='Send Permits' onPress={this.handlePressTheme} />
        <DrawerButton text='Card Info' onPress={this.handlePressUsage} />
        <DrawerButton text='Purchase Permits' onPress={this.handlePressAPI} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
