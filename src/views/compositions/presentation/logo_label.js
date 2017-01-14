import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import { View } from 'react-native'
import ImageLabel from '@components/image_label'
import i18n from '@i18n'


export default class LogoLabel extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{ flex: 0.3 }}/>
        <View style={ApplicationStyles.card}>
          <ImageLabel source={Images.logo}
                      upperText={i18n.t('chicagoGuest')}
                      bottomText={i18n.t('parkingPasses')}
                      upperStyle={Fonts.style.info_text}
                      bottomStyle={Fonts.style.info_text}
                      imageStyle={[ApplicationStyles.image, {height: Metrics.images.large}]}/>
        </View>
        <View style={{ flex: 0.3 }}/>
      </View>
    )
  }
}
