import React from 'react';
import { Text, View, Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login View Screen</Text>
            <Button title="Go to Login View... again" onPress={() => navigation.push('Login')} />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
        </View>
    );
};

export default Login;
