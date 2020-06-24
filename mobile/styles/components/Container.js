import React from 'react';
import styled from '@emotion/native';
import colors from '../constants/ColorScheme';

const StyledContainer = styled.View`
  background-color: ${colors.white};
  height: 400px;
  width: 100%;
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
