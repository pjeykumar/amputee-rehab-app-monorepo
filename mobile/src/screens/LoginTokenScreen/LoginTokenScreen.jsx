import React, { useState } from 'react';
import { Layout, Title, Button, Codefield, Text } from '../../styles/components';
import styled from '@emotion/native';
import { ActivityIndicator } from 'react-native-paper';
import { withAuthContext } from '../../contexts/AuthContext/AuthContext';

const StyledView = styled.View`
  margin-top: 20;
  flex-direction: row;
  justify-content: space-between;
`;

const LoginTokenScreen = ({ submitUserDetails }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const CELL_COUNT = 6;

  const onReSendEmail = () => {
    console.log('resend email clicked');
  };
  const onSubmit = async () => {
    setError(null);
    setLoading(true);
    const { data, errors } = await submitUserDetails({ value }, () => {});
    if (errors) setError(errors);
    console.warn(error);
  };

  return (
    <Layout justifyContent="center">
      {loading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
        <>
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
        </>
      )}
    </Layout>
  );
};

export default withAuthContext(LoginTokenScreen);
