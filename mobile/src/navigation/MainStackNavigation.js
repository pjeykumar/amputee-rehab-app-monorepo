import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home } from '../screens';
import { Layout } from '../../styles/components';

const MainStack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    // <MainStack.Navigator screenOptions={headerShown: false}>
    <MainStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Home" component={Home} options={{ title: 'Home View' }} />
    </MainStack.Navigator>
  );
}
