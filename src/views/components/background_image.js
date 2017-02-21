import React, { Component, PropTypes } from 'react'
import { Image } from 'react-native'

class BackgroundImage extends Component {
  render() {
    const { source, children, style, ...props } = this.props
    return (
      <Image source={ source }
             style={ {
               flex:   1, ...style
             } }
             {...props}>
        { children }
      </Image>
    )
  }
}
BackgroundImage.propTypes = {
  source:   PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style:    PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
}
export default BackgroundImage