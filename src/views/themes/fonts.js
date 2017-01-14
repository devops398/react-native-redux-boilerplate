import Metrics from './metrics'

const type = {
  base:             'HelveticaNeue',
  bold:             'HelveticaNeue-Bold',
  emphasis:         'HelveticaNeue-Italic',
  openSans:         'OpenSans-Light',
  openSansRegular:  'OpenSans',
  openSansSemiBold: 'OpenSans-Semibold',
  robotoThin:       'Roboto-Thin',
  robotoLight:      'Roboto-Light'
}

const size = {
  h1:      Metrics.getSize(160),
  h2:      Metrics.getSize(40),
  h3:      Metrics.getSize(28),
  large:   Metrics.getSize(22),
  regular: Metrics.getSize(16),
  medium:  Metrics.getSize(15),
  info:    Metrics.getSize(14),
  small:   Metrics.getSize(12),
  tiny:    Metrics.getSize(11)
}

const transparent_font = {
  backgroundColor: 'transparent'
}

const style = {
  h1_value_title:    {
    fontFamily: type.robotoLight,
    fontSize:   size.h1,
    ...transparent_font
  },
  h2_value_title:    {
    fontFamily: type.robotoLight,
    fontSize:   size.h2,
    ...transparent_font
  },
  large_button:      {
    fontFamily: type.openSansSemiBold,
    fontSize:   size.h3,
    ...transparent_font
  },
  large_value:       {
    fontFamily: type.openSans,
    fontSize:   size.large,
    ...transparent_font
  },
  button_text:       {
    fontFamily: type.openSansSemiBold,
    fontSize:   size.regular,
    ...transparent_font
  },
  regular_title:     {
    fontFamily: type.openSans,
    fontSize:   size.regular,
    ...transparent_font
  },
  info:     {
    fontFamily: type.openSansRegular,
    fontSize:   size.medium,
    ...transparent_font
  },
  medium_info:       {
    fontFamily: type.openSans,
    fontSize:   size.info,
    ...transparent_font
  },
  info_text:         {
    fontFamily: type.openSans,
    fontSize:   size.info,
    ...transparent_font
  },
  regular_info_text: {
    fontFamily: type.openSansRegular,
    fontSize:   size.info,
    ...transparent_font
  },
  bold_info_text:    {
    fontFamily: type.openSansSemiBold,
    fontSize:   size.info,
    ...transparent_font
  },
  small_subtitle:    {
    fontFamily: type.openSansRegular,
    fontSize:   size.small,
    ...transparent_font
  },
  tiny_subtitle:     {
    fontFamily: type.openSans,
    fontSize:   size.tiny,
    ...transparent_font
  }
}

export default {
  type,
  size,
  style
}

