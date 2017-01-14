'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '@themes'

export default StyleSheet.create({
  image: {
    height: Metrics.images.large,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems:     'center'
  },
  upperLabelText: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  },
  bottomLabelText: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
