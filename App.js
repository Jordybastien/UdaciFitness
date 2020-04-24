import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Router from './Router';
import { setLocalNotification } from './utils/helpers';

class App extends Component {
  state = {};

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
