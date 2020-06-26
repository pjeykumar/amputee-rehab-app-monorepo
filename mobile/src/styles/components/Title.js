import React from 'react';
import styled from '@emotion/native';
import { Title as PaperTitle } from 'react-native-paper';

const StyledTitle = styled(PaperTitle)`
  margin-top: 72px;
  margin-left: 32px;
  margin-bottom: 16px;
`

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
