import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled from '@emotion/native';
import { colours, font } from '../constants';
import { Text } from './index';

const StyledButton = styled(PaperButton)`
  margin: 8px 0;
  justify-content: center;

  align-self: ${(props) => (props.alignSelf !== undefined ? props.alignSelf : 'auto')};

  background-color: ${(props) => {
    if (props.primary) {
      return colours.blueDark;
    } else if (props.secondary) {
      return colours.yellowDark;
    }
  }};

  width: ${(props) => {
    if (props.small) {
      return '100px';
    } else if (props.large) {
      return '200px';
    }
  }};
`;

const Button = ({ children, mode = 'contained', ...props }) => {
  return (
    <StyledButton uppercase={false} mode={mode} {...props}>
      <Text color={colours.white} fontWeight={font.bold} fontSize={font.small}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
