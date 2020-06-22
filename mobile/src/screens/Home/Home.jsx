import React from 'react';
import { Button } from 'react-native-paper';
import styled from '@emotion/native';
import colors from '../../../styles/ColorTheme';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 501;
  color: palevioletred;
`;

const StyledButton = styled(Button)`
  width: 150px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>React Native with 👩‍🎤 Emotion</Title>
      <StyledButton mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </StyledButton>
    </Container>
  );
};

export default Home;
