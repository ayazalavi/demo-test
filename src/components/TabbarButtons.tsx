import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TabButton from './TabButton';
import {xm} from './NameField';

const Icons = [
  require('../../assets/tab01.png'),
  require('../../assets/tab02.png'),
  require('../../assets/tab03.png'),
  require('../../assets/tab04.png'),
  require('../../assets/tab05.png'),
];
function TabbarButtons({state, descriptors, navigation}: BottomTabBarProps) {
  const iconCallBack = (index: number, selected: boolean) => (
    <Image
      source={Icons[index]}
      style={{width: 24 * xm, height: 24 * xm}}
      resizeMode="cover"
      tintColor={selected ? '#EF7D00' : '#8C9099'}
    />
  );

  return (
    <View style={styles.main}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel as string;
        const isFocused = state.index === index;

        return (
          <TabButton
            isFocused={isFocused}
            navigation={navigation}
            text={label || ''}
            icon={iconCallBack(index, isFocused)}
            route={route}
            key={label}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    paddingBottom: 20,
    bottom: 16,
    paddingHorizontal: 16 * xm,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 7},
    shadowRadius: 16,
  },
});

export default TabbarButtons;
