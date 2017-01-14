'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '@themes'

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems:     'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 0,
    shadowColor: Colors.black,
    elevation: 2,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 6
  }
})
