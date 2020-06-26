import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled, { css } from '@emotion/native';
import colors from '../constants/ColorScheme';

const StyledButton = styled(PaperButton)`
  background-color: ${(props) => {
    if (props.primary) {
      return colors.blueDark;
    } else if (props.secondary) {
      return colors.yellowDark;
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

const Button = ({ children, mode = 'contained', color, onPress = () => {}, ...props }) => {
  return (
    <StyledButton mode={mode} color={color} onPress={onPress} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
