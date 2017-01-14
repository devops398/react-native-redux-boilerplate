import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')
const K = (height/568)
const getSize = (size) => size*K
// Used via Metrics.baseMargin
const metrics = {
  getSize: getSize,
  k: K,
  marginHorizontal: 20,
  marginVertical: 10,
  section: 25,
  baseMargin: 15,
  doubleBaseMargin: 30,
  smallMargin: 5,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  visibleScreenHeight: (width < height ? height : width)*0.6,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: getSize(17),
    small: getSize(20),
    medium: getSize(30),
    large: getSize(60),
    xl: getSize(60)
  },
  images: {
    small: getSize(10),
    medium: getSize(40),
    large: getSize(75),
    logo: getSize(300)
  },
  buttons: {
    small: getSize(15),
    medium: getSize(40),
    large: getSize(60),
    logo: getSize(300)
  },
  borderRadius: 2,
  borderWidth: 1
}

export default metrics
