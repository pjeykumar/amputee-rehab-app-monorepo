import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen } from '../screens';
import { BottomNavigationBar } from '../components';

const MainStack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    <>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home View' }} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
      <BottomNavigationBar />
    </>
  );
}
