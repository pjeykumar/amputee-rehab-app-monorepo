import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled from '@emotion/native';
import { colours, font } from '../constants';
import { Text } from './index';

const StyledButton = styled(PaperButton)`
  margin: 8px 0;
  justify-content: center;
  box-sizing: border-box;
  border-width: 2px;

  align-self: ${(props) => (props.alignSelf !== undefined ? props.alignSelf : 'auto')};

  background-color: ${(props) => {
    if (props.inverted) {
      return colours.yellowLighter;
    }
    if (props.primary) {
      return colours.blueDarker;
    } else if (props.secondary) {
      return colours.yellowDark;
    } else if (props.tertiary) {
      return colours.red;
    }
  }};

  border-color: ${(props) => {
    if (props.primary) {
      return colours.blueDarker;
    } else if (props.secondary) {
      return colours.greyLighter;
    } else if (props.tertiary) {
      return colours.redDark;
    }
  }};

  width: ${(props) => {
    if (props.small) {
      return '100px';
    } else if (props.medium) {
      return '150px';
    } else if (props.large) {
      return '200px';
    }
  }};
`;

const buttonTextColour = (props) => {
  if (props.inverted) {
    if (props.primary) {
      return colours.blueDarker;
    }
    if (props.secondary) {
      return colours.greyDark;
    }
    if (props.tertiary) {
      return colours.redDark;
    }
  }
  if (props.primary || props.tertiary) {
    return colours.yellowLighter;
  }
  if (props.secondary) {
    return colours.greyDarker;
  }

  return colours.yellowLighter;
};

const Button = ({ children, mode = 'contained', ...props }) => {
  const textColour = buttonTextColour(props);
  return (
    <StyledButton uppercase={false} mode={mode} {...props}>
      <Text colour={textColour} fontWeight={font.bold} fontSize={font.small}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
