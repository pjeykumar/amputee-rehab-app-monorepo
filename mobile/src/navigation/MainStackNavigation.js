import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home } from '../screens';

const MainStack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home View' }}
      />
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
}
