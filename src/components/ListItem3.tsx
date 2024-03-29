import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {emergency} from '../data/homebuttons';
import {xm} from './NameField';
import CardBackground from './Card2';

export function ListItem3({item}: {item: (typeof emergency)[0]}) {
  return (
    <View style={[styles.main]}>
      <Image style={styles.image} resizeMode="cover" source={item.photo} />
      <CardBackground title={item.title} donors={item.donors} />
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
    height: 241 * xm,
    width: 324 * xm,
    backgroundColor: 'white',
  },
  image: {width: '100%', height: 182 * xm},
});
