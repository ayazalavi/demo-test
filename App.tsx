/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import RadialGradient from './src/RadialGradient';
import WhiteSpot from './src/whitespot';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar hidden />

      <RadialGradient />

      <View style={{...StyleSheet.absoluteFillObject, flex: 1, top: -50}}>
        <WhiteSpot />
      </View>
    </>
  );
}

export default App;
