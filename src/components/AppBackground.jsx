import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

const FROM_COLOR = 'rgb(255, 255, 255)';
const TO_COLOR = '#EF7D00';

const AppBackground = () => {
  return (
    <View style={[styles.main, StyleSheet.absoluteFillObject]}>
      <Svg height="100%" width="100%" style={styles.svg}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="45%" x2="0%" y2="65%">
            <Stop offset="0" stopColor={TO_COLOR} />
            <Stop offset="1" stopColor={FROM_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect
          width="101%"
          height={Dimensions.get('window').height}
          fill="url(#grad)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {width: '100%', height: Dimensions.get('window').height},
  svg: {zIndex: 1},
});

export default AppBackground;
