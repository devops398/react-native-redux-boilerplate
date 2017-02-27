import React from 'react';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://localhost:3000')
);


import App from './app';
import AppRoute from './routes/app_route';

export default class Root extends React.Component {
  render() {
    return (
      <RootContainer
        Component={App}
        route={new AppRoute({status: 'any'})}
      />
    );
  }
}