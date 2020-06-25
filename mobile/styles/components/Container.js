import React from 'react';
import styled from '@emotion/native';
import { ColourScheme } from '../constants';

const StyledContainer = styled.View`
  background-color: ${ColourScheme.white};
  justify-content: center;
  padding: 24px;
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
