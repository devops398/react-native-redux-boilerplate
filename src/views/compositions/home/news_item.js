
import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default ({avatar, name}) => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems:     'center',
      flex:           1,
      flexDirection: 'row',
    }}>
      <Image style={styles.image} source={{ uri: avatar }}/>
      <Text style={{flex: 1}}>
        {name}
      </Text>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  image: {
    height:       50,
    width:        50,
    borderRadius: 25,
  }
});