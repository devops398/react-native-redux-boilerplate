import React from 'react'
var sinon = require('sinon');
import RoundedButton from '@components/rounded_button'
import { shallow } from 'enzyme'
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native"

describe("RoundedButton", () => {

  it('component exists', () => {
    const wrapper = shallow(<RoundedButton onPress={() => {}} text='sign in' />)
    expect(wrapper.length, 1) // exists
  })

  it('component structure', () => {
    const wrapper = shallow(<RoundedButton onPress={() => {}} text='create an account' />)

    expect(wrapper.name()).to.equal(TouchableOpacity.displayName) // the right root component
    expect(wrapper.children().length).to.equal(2) // has 1 child
    expect(wrapper.children().last().name()).to.equal('Text') // that child is Text
  })

  it('onPress', () => {
    var callback = sinon.spy();
    const wrapper = shallow(<RoundedButton onPress={callback} text='hi' />)

    expect(wrapper.prop('onPress'), callback) // uses the right handler
    wrapper.simulate('press')
    expect(callback.calledOnce).to.equal(true)
  })

  it('renders children text when passed', () => {
    const wrapper = shallow(<RoundedButton onPress={() => {}}>Sign in</RoundedButton>)
    expect(wrapper.children().length).to.equal(3) // has 1 child
    expect(wrapper.children().last().name()).to.equal('Text') // that child is Text
  })

})
