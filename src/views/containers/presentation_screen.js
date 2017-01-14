import React, {Component, PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { FabricWrapper } from '@components/fabric_answers_wrapper'

import {PresentationPage, LoginButton, SignUpButton, LogoLabel } from '@compositions/presentation'

class PresentationScreen extends Component {

  static propTypes = {
    login: PropTypes.func,
    register: PropTypes.func
  }

  render () {
    return (
      <PresentationPage>
          <View style={{flex: 1}} />
          <LogoLabel />
          <View style={{flex: 1}} />

          <LoginButton onPress={this.props.login} />

          <SignUpButton onPress={this.props.register} />

      </PresentationPage>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: Actions.login,
    register: Actions.register
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(FabricWrapper(PresentationScreen, "Presentation Screen", "Container", PresentationScreen.name))
