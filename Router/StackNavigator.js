import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EntryDetail from '../components/EntryDetail';
import { white, purple } from '../utils/colors';
import TabNav from './TabNavigator';

const StackNavigatorConfig = {
  headerMode: 'screen',
};
const StackConfig = {
  TabNav: {
    name: 'Home',
    component: TabNav,
    options: { headerShown: false },
  },
  EntryDetail: {
    name: 'EntryDetail',
    component: EntryDetail,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['TabNav']} />
      <Stack.Screen {...StackConfig['EntryDetail']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
