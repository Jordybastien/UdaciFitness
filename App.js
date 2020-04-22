import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Router from './Router'

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Router />
        {/* <View style={{ flex: 1 }}> */}
        {/* <NavigationContainer>
          <AppStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNav />
        </NavigationContainer> */}
        {/* </View> */}
      </Provider>
    );
  }
}

export default App;
