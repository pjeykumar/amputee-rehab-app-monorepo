import React from 'react';
import { Text } from '../components';
import { font } from '../../styles/constants';

const Link = ({ children, onPress }) => {
  return (
    <Text onPress={onPress} fontSize={font.small} textDecoration={'underline'}>
      {children}
    </Text>
  );
};

export default Link;
