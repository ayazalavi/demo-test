import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';

const FROM_COLOR = '#FFFFFF';
const TO_COLOR = '#FFFFFF';

const CardBackground = ({children, index}) => {
  const mr = {marginRight: index % 2 === 0 ? 19 : 0};
  return (
    <View style={[styles.main, mr]}>
      <Svg height="100%" width="100%" style={styles.svg}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} stopOpacity={50} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 16,
    overflow: 'hidden',
    flex: 1,
    marginVertical: 9,
  },
  svg: {position: 'absolute'},
});

export default CardBackground;
