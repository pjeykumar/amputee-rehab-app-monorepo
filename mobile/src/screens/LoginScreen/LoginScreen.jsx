import React, { useState } from 'react';
import { Title, Button, Layout, Container, TextInput, Link, Text } from '../../styles/components';
import { withAuthContext } from '../../contexts/AuthContext/AuthContext';
import styled from '@emotion/native';
import { font } from '../../styles/constants';

const Login = ({ navigation, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    setError(null);
    const { data, errors } = await login({ email, password }, () => {
      navigation.navigate('Home');
    });

    if (errors) setError(errors);
    console.warn(data);
  };

  let Errors = null;
  if (error) {
    Errors = <Container></Container>;
  }

  const StyledButton = styled(Button)`
    align-self: flex-end;
  `;

  return (
    <Layout>
      <Title large>Login</Title>
      <Container>
        {error ? (
          <React.Fragment>
            {error.map(({ message, field }) => (
              <Text key={message}>{message}</Text>
            ))}
          </React.Fragment>
        ) : null}
        <TextInput
          title="Email address"
          value={email}
          placeholder={'e.g. someone@abc.com'}
          onChange={(event) => setEmail(event.nativeEvent.text)}
        />
        <TextInput
          title="Password"
          secureTextEntry={true}
          value={password}
          onChange={(event) => setPassword(event.nativeEvent.text)}
        />
        <Link onPress={() => console.log('Forgotten Password link pressed')}>Forgotten your password?</Link>
        <StyledButton small onPress={() => onSubmit()}>
          Login
        </StyledButton>
      </Container>
      <Text fontSize={font.small}>
        If you don't have an account,{' '}
        <Link onPress={() => console.log('Register here link pressed')}>Register here</Link>
      </Text>
    </Layout>
  );
};

export default withAuthContext(Login);

