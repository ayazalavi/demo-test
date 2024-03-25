import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

const FROM_COLOR = 'rgb(255, 255, 255)';
const TO_COLOR = '#EF7D00';

const AppBackground = () => {
  return (
    <View style={[styles.main, StyleSheet.absoluteFillObject]}>
      <Svg height="100%" width="100%" style={styles.svg}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="30%" x2="0%" y2="100%">
            <Stop offset="1" stopColor={FROM_COLOR} />
            <Stop offset="0" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="90%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {width: '100%', height: '100%'},
  svg: {zIndex: 1},
});

export default AppBackground;
