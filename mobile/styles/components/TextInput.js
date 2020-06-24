import React from 'react';
import styled from '@emotion/native';
import { TextInput as PaperTextInput, Subheading } from 'react-native-paper';
import { ColorScheme, FontScheme } from '../../styles/constants';

const StyledTextInput = styled(PaperTextInput)``;
const StyledSubheading = styled(Subheading)`
  color: ${colors.blueDarker};
`;
const StyledTextInputContainer = styled.View`
  padding: 8px 0;
`;

const TextInput = ({ fontSize = 16, title, children, ...props }) => {
  console.log('title', title);
  return (
    <StyledTextInputContainer>
      <StyledSubheading>{title}</StyledSubheading>
      <StyledTextInput fontSize={fontSize} {...props}>
        {children}
      </StyledTextInput>
    </StyledTextInputContainer>
  );
};

export default TextInput;
