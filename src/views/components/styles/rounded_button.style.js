'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '@themes'

export default StyleSheet.create({
  button: {
    height: Metrics.buttons.medium,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center'
  },
  buttonText: {
    ...Fonts.style.button_text,
    textAlign: 'center',
    marginVertical: Metrics.baseMargin
  }
})
