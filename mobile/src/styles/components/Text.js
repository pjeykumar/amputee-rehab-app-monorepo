import React from 'react';
import styled from '@emotion/native';
import { colours, font } from '../constants';
import { Text as PaperText } from 'react-native-paper';

const StyledText = styled(PaperText)`
  font-family: ${(props) => (props.fontFamily !== undefined ? props.fontFamily : font.family)};
  font-size: ${(props) => (props.fontSize !== undefined ? props.fontSize : font.default)};
  font-weight: ${(props) => (props.fontWeight !== undefined ? props.fontWeight : font.weight)};
  color: ${(props) => (props.color !== undefined ? props.color : colours.greyDarker)};
  text-decoration: ${(props) => (props.textDecoration !== undefined ? props.textDecoration : 'none')};
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
