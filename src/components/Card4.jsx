import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {xm} from './NameField';

const CardBackground = ({title}) => {
  return (
    <View style={[styles.bubble]}>
      <View style={[styles.bubble, {width: 325 * xm}]}>
        <Svg width="100%" height="76" viewBox="0 0 324 76" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M190.57 23.127C189.108 22.861 187.603 22.7222 186.065 22.7222H25.2041C11.397 22.7222 0.204102 33.9151 0.204102 47.7222V50.7397C0.204102 64.5469 11.397 75.7397 25.2041 75.7397H135.743H186.065H293.484C310.079 75.7397 323.532 65.4423 323.532 52.7397V0.126953C323.532 12.8295 310.079 23.127 293.484 23.127H190.57Z"
            fill="white"
          />
        </Svg>
      </View>
      <Text style={[styles.title]}>{title}</Text>

      {/* <View style={[styles.bubble, {borderWidth:1}]}>
        <Text style={styles.title}>{title}</Text>
      </View>      */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1,
    marginVertical: 9,
    shadowColor: '#9CA3AF',
    shadowRadius: 9,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    width: 324 * xm,
  },
  svg: {position: 'absolute'},
  bubble: {position: 'absolute', bottom: 10, width: '100%'},
  title: {
    color: '#3B3F49',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 20 * xm,
    bottom: 5,
  },
  title2: {
    color: '#5A606D',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    left: 20 * xm,
    alignItems: 'center',
  },
  image: {width: 19 * xm, height: 19 * xm, marginRight: 2},
});

export default CardBackground;
