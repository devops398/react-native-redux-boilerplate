import React, { Component } from 'react'
var Fabric = require('react-native-fabric');
var { Answers } = Fabric;

export var FabricWrapper = (ComposedComponent, name, type, id) => class extends Component {
  componentWillMount() {
    Answers.logContentView(name, type, id)
  }

  render() {
    return (
        <ComposedComponent {...this.props} />
    )
  }
}