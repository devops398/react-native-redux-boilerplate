import { TabNavigator } from 'react-navigation';

import News from './news_flow';
import Activity from './activity_flow'

export default TabNavigator({
  News: { screen: News },
  Activity: { screen: Activity },
}, {
  initialRouteName: 'Activity',
})