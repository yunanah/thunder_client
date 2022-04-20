import React from 'react';
import {CustomIcon} from './src/components/common';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Map from './src/screens/Main/Map';
import Meetings from './src/screens/Main/Meetings';
import Friends from './src/screens/Main/Friends';
import Message from './src/screens/Main/Message';

const BottomTab = createBottomTabNavigator();

const screenOptions: object = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let type = '';
    let icon = '';

    switch (route.name) {
      case 'Map':
        type = 'FontAwesome';
        icon = focused ? 'user-circle-o' : 'user-circle';
        break;

      case 'Friends':
        type = 'AntDesign';
        icon = 'calendar';
        break;

      case 'Meetings':
        type = 'Ionicons';
        icon = focused ? 'md-people-circle' : 'md-people-circle-outline';
        break;

      case 'Message':
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
      initialRouteName="Map"
      backBehavior="none">
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{headerShown: true, title: '지도'}}
      />
      <BottomTab.Screen
        name="Friends"
        component={Friends}
        options={{headerShown: true, title: '친한 친구'}}
      />
      <BottomTab.Screen
        name="Meetings"
        component={Meetings}
        options={{headerShown: true, title: '번개 모임'}}
      />
      <BottomTab.Screen
        name="Message"
        component={Message}
        options={{headerShown: true, title: '메시지'}}
      />
    </BottomTab.Navigator>
  );
};

export default Tab;
