import Fonts from './fonts'
import Metrics from './metrics'
import Colors from './colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  groupContainer:      {
    flex:           1,
    justifyContent: 'center',
    alignItems:     'center',
    alignSelf:      'center'
  },
  button:              {
    borderColor:      Colors.transparent,
    borderWidth:      Metrics.borderWidth,
    borderRadius:     Metrics.borderRadius,
    padding:          Metrics.smallMargin,
    marginBottom:     Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    justifyContent:   'center',
    alignItems:       'center'
  },
  flat_button:         {
    padding:        Metrics.smallMargin,
    justifyContent: 'center',
    alignItems:     'center',
    borderRadius:   Metrics.borderRadius,
    shadowColor:    Colors.black,
    shadowOffset:   {
      height: 4,
      width:  0
    },
    shadowOpacity:  0.2,
    shadowRadius:   6
  },
  flat_button_text:    {
    ...Fonts.style.button_text,
    textAlign:      'center',
    marginVertical: Metrics.baseMargin
  },
  rounded_button_text: {
    ...Fonts.style.button_text,
    textAlign:      'center',
    marginVertical: Metrics.baseMargin
  },
  row:                 {
    flexDirection: 'row'
  },
  title:               {
    alignItems:     'center',
    justifyContent: 'center',
    alignSelf:      'center',
    textAlign:      'center'
  },
  sectionTitle:        {
    alignSelf: 'center',
    textAlign: 'left',
    flex:      1
  },
  image:               {
    flex:           1,
    alignItems:     'center',
    justifyContent: 'center',
    resizeMode:     'contain'
  },
  borders:             {
    borderWidth:  0.3,
    borderColor:  Colors.gray,
    borderRadius: Metrics.borderRadius
  },
  card:                {
    flex:            1,
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: '#ffffff',
    borderRadius:    0,
    elevation:       2,
    shadowColor:     Colors.black,
    shadowOffset:    {
      height: 1,
      width:  0
    },
    shadowOpacity:   0.1,
    shadowRadius:    6
  },
  apart:               {
    alignItems:     'center',
    justifyContent: 'space-between'
  },
  packCard:            {
    flex:             1,
    borderLeftWidth:  1,
    borderRightWidth: 1,
    padding:          Metrics.smallMargin
  },
  input:               {
    flex:         1,
    borderWidth:  1,
    borderColor:  Colors.gray,
    borderRadius: Metrics.borderRadius
  },
  elementMargin:       {
    marginTop:    Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  pageMargin:          {
    marginHorizontal: Metrics.doubleBaseMargin
  }
}

export default ApplicationStyles
