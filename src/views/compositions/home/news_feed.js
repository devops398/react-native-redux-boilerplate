import React, { Component, PropTypes } from 'react'
import { Images, ApplicationStyles, Metrics, Colors, Fonts } from '@themes'
import i18n from '@i18n'
import { View, Image, StyleSheet, Text } from 'react-native'
import {
  Tile, Col, Row, Grid, Card, List, ListItem
} from 'react-native-elements'
import NewsItem from './news_item'

export default class News extends Component {
  render() {
    return (
        <View style={{
          justifyContent: 'center',
          alignItems:     'center',
          flex:           1
        }}>
          {
            this.props.feed.map((l, i) => (
              <NewsItem
                key={i}
                avatar={l.avatar_url}
                name={l.name}
              />
            ))
          }
        </View>
    )
  }
}
// styles
const styles = StyleSheet.create({
  image: {
    height:       100,
    borderRadius: 50,
    width:        100
  }
});