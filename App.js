/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode="cover"  style={{ tintColor: 'red',  width:200, height: 200, borderWidth: 1, borderRadius: 100 }}  source={require('./imgs/facebook.png')}></Image>
        {/* <Image source={require('./imgs/hinh2.jpg')}></Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
