import React from 'react';
import {CustomIcon} from './src/components/common';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './src/screens/Main/Main';
import Login from './src/screens/Login/Login';
import Splash from './src/screens/Splash/Splash';

const BottomTab = createBottomTabNavigator();

const screenOptions: object = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let type = '';
    let icon = '';

    switch (route.name) {
      case 'Main':
        type = 'FontAwesome';
        icon = focused ? 'user-circle-o' : 'user-circle';
        break;

      case 'Login':
        type = 'AntDesign';
        icon = 'calendar';
        break;

      case 'Splash':
        type = 'Ionicons';
        icon = focused ? 'md-people-circle' : 'md-people-circle-outline';
        break;
    }

    return <CustomIcon type={type} icon={icon} color={color} size={size} />;
  },
  tabBarInactiveTintColor: 'yellow',
  tabBarActiveTintColor: 'orange',
});

const Tab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      initialRouteName="Main"
      backBehavior="none">
      <BottomTab.Screen
        name="Main"
        component={Main}
        options={{headerShown: true, title: '메인'}}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{headerShown: true, title: '로그인'}}
      />
      <BottomTab.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: true, title: 'splash'}}
      />
    </BottomTab.Navigator>
  );
};

export default Tab;
