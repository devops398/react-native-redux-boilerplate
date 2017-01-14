import {Colors, Fonts, Metrics} from '@themes'

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.transparent,
    borderBottomColor: Colors.transparent
  },
  title: {
    color: Colors.white,
    ...Fonts.style.regular_title
  },
  blackTitle: {
    color: Colors.black,
    ...Fonts.style.regular_title
  },
  blackLeftButton: {
    tintColor: Colors.white,
    height: Metrics.buttons.small
  },
  leftButton: {
    tintColor: Colors.white,
    height: Metrics.buttons.small
  },
  rightButton: {
    color: Colors.blue
  }
}
