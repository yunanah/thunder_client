import React from 'react';
import Tab from './Tab';

import {Provider} from 'react-redux';
import {store} from './src/redux';
import {NavigationCon./src/reduxtainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default App;
