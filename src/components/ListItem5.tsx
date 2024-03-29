import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {causes} from '../data/homebuttons';
import {xm} from './NameField';
import CardBackground from './Card4';

export function ListItem5({item}: {item: (typeof causes)[0]}) {
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
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 9,
    height: 223 * xm,
    width: 324 * xm,
    backgroundColor: 'white',
  },
  image: {width: '100%', height: 182 * xm},
});
