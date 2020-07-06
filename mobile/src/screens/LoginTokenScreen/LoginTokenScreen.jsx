import React, { useState } from 'react';
import { Layout, Title, Button, Codefield, Text } from '../../styles/components';
import styled from '@emotion/native';

const StyledView = styled.View`
  margin-top: 20;
  flex-direction: row;
  justify-content: space-between;
`;

const LoginTokenScreen = () => {
  const [value, setValue] = useState('');
  const CELL_COUNT = 6;

  const onReSendEmail = () => {
    console.log('resend email clicked');
  };

  const onSubmit = () => {
    console.log('value', value);
  };

  return (
    <Layout justifyContent="center">
      <Title large>Enter your login code</Title>
      <Text margin="10px 0 0 0">To complete your login or registration, enter the code we sent to your email</Text>
      <Codefield CELL_COUNT={CELL_COUNT} setValue={setValue} value={value} />
      <StyledView>
        <Button primary inverted medium onPress={() => onReSendEmail()}>
          Resend email {'»'}
        </Button>
        <Button primary medium onPress={() => onSubmit()} alignSelf="flex-end">
          Submit {'»'}
        </Button>
      </StyledView>
    </Layout>
  );
};

export default LoginTokenScreen;
