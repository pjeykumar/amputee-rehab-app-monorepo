import React from 'react';
import { LoginScreen, ActivitiesScreen, LeaderboardScreen, ProfileScreen, SettingsScreen } from '../../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { colours, font } from '../../styles/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '../../styles/components';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: colours.blue,
  inactiveTintColor: colours.white,
  activeBackgroundColor: colours.blueDarker,
  inactiveBackgroundColor: colours.blueDarker,
  style: { height: 64 },
  adaptive: false,
};

const getScreenOptions = (route) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;

    if (route.name === 'Leaderboard') {
      iconName = 'trophy';
    } else if (route.name === 'Activites') {
      iconName = 'calendar-o';
    } else if (route.name === 'Profile') {
      iconName = 'user';
    } else if (route.name === 'Settings') {
      iconName = 'cog';
    }

    return <FontAwesome name={iconName} size={focused ? 20 : 18} color={color} />;
  },
  tabBarLabel: ({ focused }) => {
    return (
      <Text
        fontSize={font.small}
        colour={focused ? colours.blue : colours.white}
        fontWeight={focused ? font.bold : font.regular}
        margin="-6px 0 8px"
      >
        {route.name}
      </Text>
    );
  },
});

function BottomStackNavigation() {
  return (
    <Tab.Navigator screenOptions={({ route }) => getScreenOptions(route)} tabBarOptions={tabBarOptions}>
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
