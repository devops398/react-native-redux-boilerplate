import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import { View } from 'react-native'
import {
  Tile
} from 'react-native-elements'
import ImageLabel from '@components/image_label'
import i18n from '@i18n'


export default class LogoLabel extends Component {
  render() {
    return (
      <Tile
        imageSrc={{uri: 'https://pp.vk.me/c626817/v626817682/124bc/wn-twv1qxOM.jpg' }}
        style={{flex : 1}}
        title='Demo React Native App'
        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
      >
      </Tile>
    )
  }
}
