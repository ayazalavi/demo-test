import React from 'react';
import {StatusBar, StyleSheet, FlatList} from 'react-native';
import {arr} from '../data/homebuttons';
import Whitespot from '../components/WhiteSpot';
import AppBackground from '../components/AppBackground';
import {ListItem} from '../components/ListItem';

export function Home() {
  return (
    <>
      <StatusBar hidden />
      <AppBackground />
      <Whitespot />
      <FlatList
        data={arr}
        renderItem={({item, index}) => <ListItem index={index} item={item} />}
        keyExtractor={item => item.title}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    padding: 15,
    top: '20%',
  },
});
