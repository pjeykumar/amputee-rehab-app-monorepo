import React from 'react';
import styled from '@emotion/native';
import colors from '../constants/ColorScheme';

const StyledContainer = styled.View`
  background-color: ${colors.white};
  justify-content: center;
  padding: 24px;
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
