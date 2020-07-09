import React from 'react';
import { Text } from '../components';
import { colours, font } from '../constants';

const Subtitle = ({ children, fontSize = font.large, margin }) => {
  return (
    <Text colour={colours.blueDarker} fontSize={fontSize} fontWeight={font.bold} margin={margin}>
      {children}
    </Text>
  );
};
export default Subtitle;