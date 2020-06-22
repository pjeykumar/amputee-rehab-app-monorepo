import React from 'react';
import { Button, Title } from '../../../styles/components';
import styled from '@emotion/native';
import colors from '../../../styles/constants/ColorScheme';

const Home = ({ navigation }) => {
  return (
    <>
      <Title>React Native with 👩‍🎤 Emotion</Title>
      <Button color={colors.yellow} onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </>
  );
};

export default Home;
