import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation/MainStackNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { PaperTheme, NavigationTheme } from './src/styles';
import { AuthProvider } from './src/contexts/AuthContext/AuthContext';
import { colours } from './src/styles/constants';
import { SafeAreaView } from './src/styles/components';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

//Removes yellow warning box for devs, remove later
console.disableYellowBox = true;

export default function App() {
  const [isLoaded] = useFonts({
    Avenir: require('./assets/fonts/Avenir-Book.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else
    return (
      <AuthProvider>
        <PaperProvider theme={PaperTheme}>
          <SafeAreaView flex={0} backgroundColor={colours.yellowLighter} />
          <SafeAreaView>
            <NavigationContainer theme={NavigationTheme}>
              <MainStackNavigation />
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </AuthProvider>
    );
}
