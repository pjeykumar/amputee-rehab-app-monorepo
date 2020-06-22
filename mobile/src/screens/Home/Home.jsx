import React from 'react';
import { Button, Title } from '../../../styles/components';
import styled from '@emotion/native';
import colors from '../../../styles/constants/ColorScheme';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Title>React Native with 👩‍🎤 Emotion</Title>
      <Button color={colors.yellow} onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </Container>
  );
};

export default Home;
