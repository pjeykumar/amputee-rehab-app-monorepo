import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { ActivitiesScreen, LeaderboardScreen, ProfileScreen, SettingsScreen } from '../../screens';

class BottomNavigationBar extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'activities', title: 'Activities', icon: 'calendar' },
      { key: 'leaderboard', title: 'Leaderboard', icon: 'trophy-outline' },
      { key: 'profile', title: 'Profile', icon: 'account-outline' },
      { key: 'settings', title: 'Settings', icon: 'settings-outline' },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    activities: ActivitiesScreen,
    leaderboard: LeaderboardScreen,
    profile: ProfileScreen,
    settings: SettingsScreen,
  });

  render() {
    return (
      <BottomNavigation
        shifting={false}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default BottomNavigationBar;
