import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CardBackground from './Card';
import {arr} from '../data/homebuttons';

export function ListItem({
  index,
  item,
}: {
  index: number;
  item: (typeof arr)[0];
}) {
  return (
    <CardBackground index={index}>
      <View style={styles.main}>
        <View style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <Image
          width={30}
          height={30}
          style={styles.image}
          resizeMode="center"
          source={item.icon}
        />
      </View>
    </CardBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
  },
  text: {flex: 1},
  title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
    marginBottom: 16,
  },
  subtitle: {
    color: 'rgba(0,0,0,0.5)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
  },
  image: {maxWidth: 30, maxHeight: 30},
});
