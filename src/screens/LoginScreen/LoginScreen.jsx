import React, { useState } from 'react';
import { Title, Button, Layout, Container, TextInput, Link, Text } from '../../styles/components';
import { withAuthContext } from '../../contexts/AuthContext/AuthContext';
import { font } from '../../styles/constants';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <Layout justifyContent="center">
      <Title large>Login</Title>
      <Text fontSize={font.small}>
        I have read and agree to the{' '}
        <Link onPress={() => console.log('Terms of Service link pressed')}>Terms of Service</Link> and the{' '}
        <Link onPress={() => console.log('Privacy Policy link pressed')}>Privacy Policy</Link>
      </Text>
      <Button onPress={() => navigation.navigate('Home')} alignSelf="flex-end">
        Get started {'>>'}
      </Button>
    </Layout>
  );
};

export default withAuthContext(Login);
