import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import History from './components/History';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { white, purple } from './utils/colors';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

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

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={createStore(reducer)}>
        {/* <View style={{ flex: 1 }}> */}
        <NavigationContainer>
          <AppStatusBar backgroundColor={purple} barStyle='light-content' />
          <Tab.Navigator {...TabNavigatorConfig}>
            <Tab.Screen {...RouteConfigs['History']} />
            <Tab.Screen {...RouteConfigs['AddEntry']} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* </View> */}
      </Provider>
    );
  }
}

export default App;
