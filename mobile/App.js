import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import styled from '@emotion/native';

const AppContainer = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <AppContainer>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </AppContainer>
  );
}
