import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { white, purple } from '../utils/colors';
import History from '../components/History';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import AddEntry from '../components/AddEntry';
import Live from '../components/Live';

const RouteConfigs = {
  History: {
    name: 'History',
    component: History,
    options: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      ),
      title: 'History',
    },
  },
  AddEntry: {
    component: AddEntry,
    name: 'Add Entry',
    options: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name='plus-square' size={30} color={tintColor} />
      ),
      title: 'Add Entry',
    },
  },
  Live: {
    component: Live,
    name: 'Live',
    options: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name='ios-speedometer' size={30} color={tintColor} />
      ),
      title: 'Live',
    },
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen {...RouteConfigs['History']} />
      <Tab.Screen {...RouteConfigs['AddEntry']} />
      <Tab.Screen {...RouteConfigs['Live']} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
