import React from 'react';
import styled from '@emotion/native';
import { colours } from '../constants';

const StyledLayout = styled.View`
  background-color: ${colours.yellowLighter};
  flex: 1;
  padding: 70px 30px;
`;

const Layout = ({ children, ...props }) => {
  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
