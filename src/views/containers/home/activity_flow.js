import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import i18n from '@i18n'
import { View } from 'react-native'
import { Card, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import Actions from '@actions/creators'

class ActivityFlow extends Component {
  render() {
    return (
      <Card>
      </Card>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    activity: state.activity
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    attemptLogin: ( username, password ) => dispatch(Actions.requestLogin(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFlow)