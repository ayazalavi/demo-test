import React from 'react';
import {StatusBar, StyleSheet, FlatList, ScrollView} from 'react-native';
import {arr, calculators, causes, emergency, events} from '../data/homebuttons';
import Whitespot from '../components/WhiteSpot';
import AppBackground from '../components/AppBackground';
import {ListItem} from '../components/ListItem';
import NameField, {xm} from '../components/NameField';
import ProgressBar from '../components/ProgressBar';
import {Header, ListItem2, Separator} from '../components/ListItem2';
import {ListItem3} from '../components/ListItem3';
import {ListItem4} from '../components/ListItem4';
import {ListItem5} from '../components/ListItem5';
import FAQButton from '../components/FAQButton';
import VolunteerButton from '../components/VolunteerButton';

export function Home() {
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.scroll}>
      <StatusBar hidden />
      <AppBackground />
      <Whitespot />
      <NameField />
      <ProgressBar />
      <FlatList
        data={arr}
        scrollEnabled={false}
        renderItem={({item, index}) => <ListItem index={index} item={item} />}
        keyExtractor={item => item.title}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      <Header title="Calculators" />
      <FlatList
        data={calculators}
        horizontal
        renderItem={({item}) => <ListItem2 item={item} />}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.list2}
        ItemSeparatorComponent={Separator}
      />

      <Header title="Emergency Response" bold />
      <FlatList
        data={emergency}
        horizontal
        renderItem={({item}) => <ListItem3 item={item} />}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.list2}
        ItemSeparatorComponent={Separator}
      />

      <Header title="Featured Causes" bold />
      <FlatList
        data={causes}
        horizontal
        renderItem={({item}) => <ListItem4 item={item} />}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.list2}
        ItemSeparatorComponent={Separator}
      />

      <Header title="Events" bold />
      <FlatList
        data={events}
        horizontal
        renderItem={({item}) => <ListItem5 item={item} />}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.list2}
        ItemSeparatorComponent={Separator}
      />
      <FAQButton />
      <VolunteerButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    marginTop: 8 * xm,
  },
  list2: {
    padding: 16 * xm,
  },
  scroll: {width: '100%', paddingBottom: 38 * xm},
});
