import React from 'react';
import { Text } from '../components';
import { colours, font } from '../constants';

const Title = ({ children }) => {
  return (
    <Text colour={colours.blueDarker} fontSize={font.large} fontWeight={font.bold}>
      {children}
    </Text>
  );
};
export default Title;
