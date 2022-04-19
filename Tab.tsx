import React from 'react';
import {CustomIcon} from './components/common';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './screens/Main';
import Login from './screens/Login';
import Splash from './screens/Splash';

const BottomTab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
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

const Tab = props => {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      initialRouteName="Root"
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
