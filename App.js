import React, { Component } from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import History from './components/History';

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <History />
        </View>
      </Provider>
    );
  }
}

export default App;
