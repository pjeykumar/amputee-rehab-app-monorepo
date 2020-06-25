import React from 'react';
import styled from '@emotion/native';
import { TextInput as PaperTextInput, Subheading } from 'react-native-paper';
import { Text } from '../components';
import { font } from '../../styles/constants';

const StyledTextInput = styled(PaperTextInput)`
  font-size: ${font.default};
  height: 40px;
`;

const StyledTextInputContainer = styled.View`
  padding: 8px 0;
`;

const TextInput = ({ title, children, ...props }) => {
  return (
    <StyledTextInputContainer>
      <Text fontSize={font.small}>{title}</Text>
      <StyledTextInput {...props}>{children}</StyledTextInput>
    </StyledTextInputContainer>
  );
};

export default TextInput;
