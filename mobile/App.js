import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigation } from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { PaperTheme, NavigationTheme } from './styles';

export default function App() {
  return (
    <PaperProvider theme={PaperTheme}>
      <NavigationContainer theme={NavigationTheme}>
        <MainStackNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
