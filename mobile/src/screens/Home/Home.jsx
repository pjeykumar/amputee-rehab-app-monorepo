import React from 'react';
import { Button, Title } from '../../../styles/components';

const Home = ({ navigation }) => {
  return (
    <>
      <Title>React Native with 👩‍🎤 Emotion</Title>
      <Button primary large onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </>
  );
};

export default Home;
