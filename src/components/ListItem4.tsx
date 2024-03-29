import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {causes} from '../data/homebuttons';
import {xm} from './NameField';
import CardBackground from './Card3';

export function ListItem4({item}: {item: (typeof causes)[0]}) {
  return (
    <View style={[styles.main]}>
      <Image style={styles.image} resizeMode="cover" source={item.photo} />
      <CardBackground title={item.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    borderRadius: 20,
    shadowColor: '#9CA3AF',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 14,
    height: 207 * xm,
    width: 167 * xm,
    overflow: 'hidden',
  },
  image: {width: '100%', height: 182 * xm},
});
