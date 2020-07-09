import React, { useState } from 'react';
import { Title, Button, Layout, Container, TextInput, Link, Text } from '../../styles/components';
import { withAuthContext } from '../../contexts/AuthContext/AuthContext';
import { font } from '../../styles/constants';

const Login = ({ navigation, generateToken }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    setError(null);
    const { data, errors } = await generateToken({ email }, () => {
      navigation.navigate('LoginToken');
    });

    if (errors) setError(errors);
    console.warn(data);
  };

  return (
    <Layout justifyContent="center">
      <Title large>Login or Register</Title>
      {error ? (
        <>
          {error.map(({ message, field }) => (
            <Text key={message}>{message}</Text>
          ))}
        </>
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
      <Button primary onPress={onSubmit} alignSelf="flex-end">
        Get started {'>>'}
      </Button>
    </Layout>
  );
};

export default withAuthContext(Login);
