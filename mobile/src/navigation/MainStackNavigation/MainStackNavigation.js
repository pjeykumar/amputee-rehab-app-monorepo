import React from 'react';
import { LoginScreen, ActivitiesScreen, LeaderboardScreen, ProfileScreen, SettingsScreen } from '../../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { colours, font } from '../../styles/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Title, Button, Layout, Container, TextInput, Link, Text } from '../../styles/components';

const Tab = createBottomTabNavigator();

function BottomStackNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Leaderboard') {
            iconName = focused ? 'trophy' : 'trophy';
          } else if (route.name === 'Activites') {
            iconName = focused ? 'calendar-o' : 'calendar-o';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          }

          return <FontAwesome name={iconName} size={focused ? 22 : 20} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              fontSize={font.small}
              color={focused ? colours.blue : colours.white}
              fontWeight={focused ? font.bold : font.regular}
            >
              {route.name}
            </Text>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colours.blue,
        inactiveTintColor: colours.white,
        activeBackgroundColor: colours.blueDarker,
        inactiveBackgroundColor: colours.blueDarker,
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
