import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled, { css } from '@emotion/native';
import { ColourScheme } from '../constants';

const StyledButton = styled(PaperButton)`
  background-color: ${(props) => {
    if (props.primary) {
      return ColourScheme.blueDark;
    } else if (props.secondary) {
      return ColourScheme.yellowDark;
    }
  }};

  width: ${(props) => {
    if (props.small) {
      return '100px';
    } else if (props.large) {
      return '200px';
    }
  }};
  margin: 8px 0;
`;

const Button = ({ children, mode = 'contained', ...props }) => {
  return (
    <StyledButton mode={mode} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
