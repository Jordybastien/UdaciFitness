import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { purple } from '../utils/colors';
import Constants from 'expo-constants';
import { StatusBar, View } from 'react-native';
import MainNav from './StackNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <AppStatusBar backgroundColor={purple} barStyle='light-content' />
      <MainNav />
    </NavigationContainer>
  );
};

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default Router;
