import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {xm} from './NameField';

const xml = `
<svg width="192" height="119" viewBox="0 0 192 119">
<path d="M148.439 26.5613C135.904 -34.2273 174.585 -96.2466 191.223 -118.431C133.12 -163.329 9.62546 -213.984 -19.5315 -57.4235C-37.807 40.7081 -14.5591 84.8794 16.3045 104.991C49.2143 126.436 95.5706 122.213 124.961 96.1524C142.441 80.6528 154.886 57.8308 148.439 26.5613Z" fill="white"/>
</svg>
`;

export default () => (
  <View style={styles.parent}>
    <SvgXml xml={xml} width={217 * xm} height={285 * xm} style={styles.main} />
    <Image
      source={require('../../assets/logo_penny.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  main: {bottom: '0', right: '0', zIndex: 2},
  parent: {...StyleSheet.absoluteFillObject, flex: 1, top: -60},
  logo: {
    width: 96.67 * xm,
    zIndex: 3,
    ...StyleSheet.absoluteFillObject,
    top: 36,
    left: 24,
  },
});
