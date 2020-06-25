import React from 'react';
import styled from '@emotion/native';
import { ColourScheme } from '../constants';

const StyledLayout = styled.View`
  background-color: ${ColourScheme.yellowLighter};
  flex: 1;
  justify-content: center;
  align-content: center;
  padding: 0 4px;
`;

const Layout = ({ children, ...props }) => {
  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
