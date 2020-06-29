import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation/MainStackNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { PaperTheme, NavigationTheme } from './src/styles';
import { AuthProvider } from './src/contexts/AuthContext/AuthContext';
import { SafeAreaView } from 'react-native';
import { colours } from './src/styles/constants';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={PaperTheme}>
        <SafeAreaView style={{ flex: 0, backgroundColor: colours.yellowLighter }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: colours.blueDarker }}>
          <NavigationContainer theme={NavigationTheme}>
            <MainStackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </AuthProvider>
  );
}
