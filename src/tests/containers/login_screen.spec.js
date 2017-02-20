import React from 'react'
var sinon = require('sinon');
import LoginScreen from '@containers/login_screen'
import {Provider} from 'react-redux'
import { shallow } from 'enzyme'
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native"
import configureStore from 'redux-mock-store'
import reducers from '@reducers'
const mockStore = configureStore([])


function setup() {
  const props   = {}
  const store = mockStore(reducers)
  const wrapper = shallow(
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  )

  return {
    props,
    wrapper,
  }
}

describe("LoginScreen", () => {

  let wrapper

  beforeEach(() => {
    wrapper = setup().wrapper
  })

  it('component exists', () => {
    expect(wrapper.length, 1) // exists
  })

  it('component structure', () => {
    expect(wrapper.children().length).to.equal(1) // has 1 child
  })

})
