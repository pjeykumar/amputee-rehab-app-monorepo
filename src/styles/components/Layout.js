import React from 'react';
import styled from '@emotion/native';
import { colours } from '../constants';

const StyledLayout = styled.View`
  flex: 1;
  padding: 70px 30px;
  background-color: ${colours.yellowLighter};
  justify-content: ${(props) => (props.justifyContent !== undefined ? props.justifyContent : 'flex-start')};
`;

const Layout = ({ children, ...props }) => {
  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
