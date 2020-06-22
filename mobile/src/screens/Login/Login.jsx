import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../../styles/components';

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login View Screen</Text>
      <Button onPress={() => navigation.push('Login')}>Go to Login View... again</Button>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popToTop()}>Go back to first screen in stack</Button>
    </View>
  );
};

export default Login;
