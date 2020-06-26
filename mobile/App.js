import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation/MainStackNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { PaperTheme, NavigationTheme } from './src/styles';
import { AuthProvider } from './src/contexts/AuthContext/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={PaperTheme}>
        <NavigationContainer theme={NavigationTheme}>
          <MainStackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </AuthProvider>
  );
}
