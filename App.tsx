import React from 'react';
import Tab from './Tab';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {store} from './src/redux';
import Login from './src/screens/Login/Login';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Provider store={store}>
      <NavigationContainer>{isLogin ? <Login /> : <Tab />}</NavigationContainer>
    </Provider>
  );
};

export default App;
