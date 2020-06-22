import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

const Button = ({ children, mode = 'contained', color, onPress = () => {} }) => {
  return (
    <PaperButton mode={mode} color={color} onPress={onPress}>
      {children}
    </PaperButton>
  );
};

export default Button;
