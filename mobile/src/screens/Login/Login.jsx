import React, { useState } from 'react';
import { Button } from '../../../styles/components';
import { TextInput } from 'react-native-paper';
import styled from '@emotion/native';
import { Layout } from '../../../styles/components';
import { Container } from '../../../styles/components';

import { withAuthContext } from '../../contexts/AuthContext/AuthContext';
import { Text } from 'react-native';

const Login = ({ navigation, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    const { response, errors } = await login({ email, password });
    if (errors) setError(errors);

    if (response) {
      navigation.navigate('Home');
    }
  };

  let Errors = null;
  if (error) {
    Errors = <Container></Container>;
  }

  return (
    <Layout>
      <Container>
        {error ? (
          <React.Fragment>
            {error.map((e) => (
              <Text>{e.message}</Text>
            ))}
          </React.Fragment>
        ) : null}
        <TextInput
          label="username"
          value={email}
          placeholder={'email@email.com'}
          onChange={(event) => setEmail(event.nativeEvent.text)}
        ></TextInput>
        <TextInput
          label="password"
          title="password"
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