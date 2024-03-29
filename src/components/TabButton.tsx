import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {ParamListBase, NavigationHelpers} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {xm} from './NameField';

export default function TabButton(props: {
  isFocused: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  text: string;
  icon: ReactElement;
  route: any;
}) {
  const onPress = () => {
    const event = props.navigation.emit({
      type: 'tabPress',
      target: props.route.key,
      canPreventDefault: true,
    });

    if (!props.isFocused && !event.defaultPrevented) {
      props.navigation.navigate(props.route.name, props.route.params);
    }
  };

  const onLongPress = () => {
    props.navigation.emit({
      type: 'tabLongPress',
      target: props.route.key,
    });
  };
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.main}>
      {props.icon}
      <Text style={styles.title}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 8 * xm,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#3B3F49',
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 16 * xm,
  },
});
