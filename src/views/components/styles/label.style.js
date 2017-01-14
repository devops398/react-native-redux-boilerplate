'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '@themes'

export default StyleSheet.create({
  image: {
    width: Metrics.images.large,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center'
  }
})