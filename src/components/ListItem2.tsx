import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {calculators} from '../data/homebuttons';
import {xm} from './NameField';

export function ListItem2({item}: {item: (typeof calculators)[0]}) {
  return (
    <View style={styles.main}>
      <Image style={styles.image} resizeMode="contain" source={item.icon} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}

export const Separator = () => <View style={styles.separator} />;
export const Header = ({title, bold}: {title: string; bold?: boolean}) => (
  <Text style={[bold ? styles.title2 : styles.title, styles.header]}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    borderRadius: 11,
    backgroundColor: 'white',
    shadowColor: '#9CA3AF',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 9,
    height: 108,
    width: 116,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  title2: {
    color: '#5A606D',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
  },
  header: {
    textAlign: 'left',
    marginLeft: 16,
    marginTop: 16,
  },
  image: {maxHeight: 48, maxWidth: 52, marginBottom: 8 * xm},
  separator: {width: 16 * xm},
});
