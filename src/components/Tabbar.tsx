import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {Home} from '../pages/home';
import TabbarButtons from './TabbarButtons';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  home: undefined;
  screen2: undefined;
  screen3: undefined;
  screen4: undefined;
  screen5: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

// const renderTabbar = (props: BottomTabBarProps) => <TabbarButtons {...props} />;
const Dummy = () => <></>;
export default function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={TabbarButtons}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
          },
        }}
        initialRouteName="home">
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="screen2"
          component={Dummy}
          options={{
            tabBarLabel: 'Auto Donate',
          }}
        />
        <Tab.Screen
          name="screen3"
          component={Dummy}
          options={{
            tabBarLabel: 'Round Up',
          }}
        />
        <Tab.Screen
          name="screen4"
          component={Dummy}
          options={{
            tabBarLabel: 'Portfolio',
          }}
        />
        <Tab.Screen
          name="screen5"
          component={Dummy}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
