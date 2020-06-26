import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LoginScreen, ActivitiesScreen, LeaderboardScreen, ProfileScreen, SettingsScreen } from '../../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

function BottomStackNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Leaderboard') {
            iconName = focused ? 'md-checkmark-circle' : 'md-checkmark-circle';
          } else if (route.name === 'Activites') {
            iconName = focused ? 'md-checkmark-circle' : 'md-checkmark-circle';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-checkmark-circle' : 'md-checkmark-circle';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'md-checkmark-circle' : 'md-checkmark-circle';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Activites" component={ActivitiesScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={BottomStackNavigation} />
    </Stack.Navigator>
  );
}
