import React from 'react';
import Tab from './Tab';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {store} from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
