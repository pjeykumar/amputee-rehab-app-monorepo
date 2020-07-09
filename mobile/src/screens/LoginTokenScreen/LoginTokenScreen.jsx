import React, { useState } from 'react';
import { Layout, Title, Button, Codefield, Text, ButtonContainer } from '../../styles/components';
import { ActivityIndicator } from 'react-native-paper';
import { withAuthContext } from '../../contexts/AuthContext/AuthContext';

const LoginTokenScreen = ({ submitUserDetails }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const codeLength = 6;

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
          <Codefield codeLength={codeLength} setValue={setValue} value={value} />
          <ButtonContainer>
            <Button primary inverted medium onPress={onReSendEmail}>
              Resend email {'»'}
            </Button>
            <Button primary medium onPress={onSubmit} alignSelf="flex-end">
              Submit {'»'}
            </Button>
          </ButtonContainer>
        </>
      )}
    </Layout>
  );
};

export default withAuthContext(LoginTokenScreen);
