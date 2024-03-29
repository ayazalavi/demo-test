import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {xm} from './NameField';

export default function ProgressBar() {
  return (
    <View style={[styles.main]}>
      <View style={styles.column}>
        <Text style={styles.text}>$450</Text>
        <View style={[styles.column, styles.flex1, styles.center]}>
          <Text style={styles.text}>2024 donation goal</Text>
          <Image
            source={require('../../assets/info_icon.png')}
            style={{width: 17 * xm, height: 20 * xm, marginLeft: 4 * xm}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.text}>${new Intl.NumberFormat().format(1000)}</Text>
      </View>
      <View style={styles.progress}>
        <View style={[styles.bar, styles.bar1]} />
        <View style={[styles.bar, styles.bar2]} />
        <View style={[styles.bar, styles.bar3]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {flexDirection: 'row'},
  flex1: {flex: 1},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14 * xm,
    lineHeight: 20 * xm,
  },
  main: {
    marginTop: 75 * xm,
    marginHorizontal: 20 * xm,
  },
  progress: {
    marginTop: 4 * xm,
    width: '100%',
  },
  bar: {
    width: '100%',
    borderRadius: 8 * xm,
    ...StyleSheet.absoluteFillObject,
    height: 8 * xm,
  },
  bar1: {
    backgroundColor: 'white',
    opacity: 0.4,
  },
  bar2: {
    width: '60%',
    backgroundColor: 'white',
  },
  bar3: {
    width: '30%',
    backgroundColor: '#3B9781',
  },
});
