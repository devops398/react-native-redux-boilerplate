import { StackNavigator } from 'react-navigation';

import PresentationScreen from '../containers/presentation_screen';
import HomeScreen from '../containers/home';

export default StackNavigator({
    Presentation: { screen: PresentationScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Presentation',
  }
);