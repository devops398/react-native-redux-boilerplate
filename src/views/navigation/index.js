import { StackNavigator } from 'react-navigation';

import PresentationScreen from '@containers/presentation_screen';

export default StackNavigator({
    Presentation: { screen: PresentationScreen },
  },
  {
    initialRouteName: 'Presentation',
  }
);