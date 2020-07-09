import React from 'react';
import styled from '@emotion/native';

const StyledButtonContainer = styled.View`
  flex-direction: row;
  margin: ${(props) => props.margin || '20px 0 0'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
`;

const ButtonContainer = ({ children, ...props }) => {
  return <StyledButtonContainer {...props}>{children}</StyledButtonContainer>;
};

export default ButtonContainer;
