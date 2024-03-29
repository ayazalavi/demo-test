import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {xm} from './NameField';

const CardBackground = ({title}) => {
  return (
    <View style={styles.bubble}>
      <View style={[styles.bubble, styles.bubble2]}>
        <Svg width="100%" height="76" viewBox="0 0 168 76" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.1805 23.3457C87.7193 23.0798 86.2138 22.9409 84.6758 22.9409H25.9336C12.1265 22.9409 0.933594 34.1338 0.933594 47.9409V50.9585C0.933594 56.5601 2.77584 61.7313 5.88755 65.8995C10.0031 71.9717 16.9342 75.9585 24.7908 75.9585H25.9336H84.6758H144.813C157.44 75.9585 167.676 65.661 167.676 52.9585V0.345703C167.676 13.0483 157.44 23.3457 144.813 23.3457H89.1805Z"
            fill="white"
          />
        </Svg>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {position: 'absolute', bottom: 0, width: '100%'},
  title: {
    color: '#5A606D',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    bottom: 10 * xm,
  },
  bubble2: {width: 169 * xm, left: -1},
  footer: {justifyContent: 'center', alignItems: 'center'},
});

export default CardBackground;
