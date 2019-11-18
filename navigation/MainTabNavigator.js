import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TrackScreen from '../screens/TrackScreen';
import AddScreen from '../screens/AddScreen';
import OptionsScreen from '../screens/OptionsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const TrackStack = createStackNavigator(
  {
    Track: TrackScreen,
  },
  config
);

TrackStack.navigationOptions = {
  tabBarLabel: 'Track',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-podium`
          : 'md-podium'
      }
    />
  ),
};

TrackStack.path = '';

const AddStack = createStackNavigator(
  {
    Add: AddScreen,
  },
  config
);

AddStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

AddStack.path = '';

const OptionsStack = createStackNavigator(
  {
    Options: OptionsScreen,
  },
  config
);
 OptionsStack.navigationOptions = {
  tabBarLabel: 'Options',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

OptionsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TrackStack,
  AddStack,
  OptionsStack,
});

tabNavigator.path = '';

export default tabNavigator;
