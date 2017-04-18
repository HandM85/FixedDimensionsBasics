/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      //<View>
      // <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //  <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      //  <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      //</View>
     <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FixedDimensionsBasics', () => FixedDimensionsBasics);
