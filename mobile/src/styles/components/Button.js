import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styled from '@emotion/native';
import { colours, font } from '../constants';
import { Text } from './index';
import getTypeStyle from '../../utils/typeStyles';

const StyledButton = styled(PaperButton)`
  margin: 8px 0;
  justify-content: center;
  border-width: 2px;

  align-self: ${(props) => (props.alignSelf !== undefined ? props.alignSelf : 'auto')};

  width: ${(props) => {
    if (props.small) {
      return '100px';
    } else if (props.large) {
      return '200px';
    }
  }};

  background-color: ${(props) => {
    const backgroundColourConstants = {
      primary: colours.blueDarker,
      secondary: colours.yellow,
      tertiary: colours.red,
      inverted: {
        primary: colours.yellowLighter,
        secondary: colours.white,
        tertiary: colours.yellowLighter,
      },
    };
    return getTypeStyle(props, backgroundColourConstants);
  }};

  border-color: ${(props) => {
    const borderColourConstants = {
      primary: colours.blueDarker,
      secondary: colours.yellow,
      tertiary: colours.red,
      inverted: {
        primary: colours.blueDarker,
        secondary: colours.greyLighter,
        tertiary: colours.redDark,
      },
    };
    return getTypeStyle(props, borderColourConstants);
  }};
`;

const textColoursConstant = {
  primary: colours.yellowLighter,
  secondary: colours.greyDarker,
  tertiary: colours.yellowLighter,
  inverted: {
    primary: colours.blueDarker,
    secondary: colours.greyDark,
    tertiary: colours.redDark,
  },
};

const Button = ({ children, mode = 'contained', ...props }) => {
  const textColour = getTypeStyle(props, textColoursConstant) || colours.yellowLighter;
  return (
    <StyledButton uppercase={false} mode={mode} {...props}>
      <Text color={colours.white} fontWeight={font.bold} fontSize={font.small}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
