import React from 'react';
import { Text } from '../components';
import { colours, font } from '../constants';

const Title = ({ children, fontSize = font.large, margin }) => {
  return (
    <Text
      colour={colours.blueDarker}
      fontSize={fontSize}
      fontWeight={font.bold}
      margin={margin}
      fontFamily={font.titleFamily}
    >
      {children}
    </Text>
  );
};
export default Title;
