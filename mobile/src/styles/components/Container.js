import React from 'react';
import styled from '@emotion/native';
import { colours } from '../constants';

const StyledContainer = styled.View`
  background-color: ${colours.white};
  justify-content: center;
  padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px ` || '24px'};
  margin: ${(props) => props.margin || '20px -26px'};
  box-shadow: 1px 1px 4px ${colours.shadow};
`;
const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
export default Container;
