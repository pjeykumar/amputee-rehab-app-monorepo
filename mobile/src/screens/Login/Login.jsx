import React, { useState } from 'react';
import styled from '@emotion/native';
import { Button, Layout, Container, TextInput } from '../../../styles/components';

import { withAuthContext } from '../../contexts/AuthContext/AuthContext';

const Login = ({ navigation, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    const response = await login(email, password);
    console.log('response', response);
    if (response) {
      navigation.navigate('Home');
    }
  };

  return (
    <Layout>
      <Container>
        <TextInput
          title="Email address"
          label="username"
          value={email}
          placeholder={'email@email.com'}
          onChange={(event) => setEmail(event.nativeEvent.text)}
        ></TextInput>
        <TextInput
          title="Password"
          label="password"
          secureTextEntry={true}
          value={password}
          onChange={(event) => setPassword(event.nativeEvent.text)}
        ></TextInput>
        <Button large onPress={() => onSubmit()}>
          Submit
        </Button>
      </Container>
    </Layout>
  );
};

export default withAuthContext(Login);
