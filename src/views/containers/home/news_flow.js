import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import { View } from 'react-native'
import {
  Tile, Col, Row, Grid, Card, List, ListItem
} from 'react-native-elements'
import ImageLabel from '@components/image_label'
import i18n from '@i18n'
import { connect } from 'react-redux'
import Feed from '../../compositions/home/news_feed'

class NewsFeed extends Component {
  render() {
    console.log(this.props);
    return (
      <Card containerStyle={{padding: 50, flex: 1}}>
        <Feed feed={this.props.feed} />
      </Card>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    feed: state.news.feed
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    attemptLogin: ( username, password ) => dispatch(Actions.requestLogin(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)