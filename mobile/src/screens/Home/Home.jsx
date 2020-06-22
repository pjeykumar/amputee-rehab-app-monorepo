import React from 'react';
import { Button } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 501;
    color: palevioletred;
`;

const Home = ({ navigation }) => {
    return (
        <Container>
            <Title>React Native with 👩‍🎤 Emotion</Title>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </Container>
    );
};

export default Home;
