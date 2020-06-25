import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled from '@emotion/native';
import { colours, font } from '../constants';
import { Text } from '../../styles/components';

const StyledButton = styled(PaperButton)`
  margin: 8px 0;
  height: 28px;
  justify-content: center;

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

const Button = ({ children, mode = 'contained', height, ...props }) => {
  return (
    <StyledButton uppercase={false} mode={mode} {...props}>
      <Text color={colours.white} fontWeight={font.thick}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
