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

  const StyledLayout = styled(Layout)`
    justify-content: center;
  `;

  return (
    <StyledLayout>
      <Title large>Login or Register</Title>
      {error ? (
        <React.Fragment>
          {error.map(({ message, field }) => (
            <Text key={message}>{message}</Text>
          ))}
        </React.Fragment>
      ) : null}
      <TextInput
        title="Enter your email address to begin"
        value={email}
        placeholder={'e.g. someone@abc.com'}
        onChange={(event) => setEmail(event.nativeEvent.text)}
      />
      <Text fontSize={font.small}>
        I have read and agree to the{' '}
        <Link onPress={() => console.log('Terms of Service link pressed')}>Terms of Service</Link> and the{' '}
        <Link onPress={() => console.log('Privacy Policy link pressed')}>Privacy Policy</Link>
      </Text>
      <StyledButton onPress={() => onSubmit()}>Get started {'>>'}</StyledButton>
    </StyledLayout>
  );
};

export default withAuthContext(Login);
