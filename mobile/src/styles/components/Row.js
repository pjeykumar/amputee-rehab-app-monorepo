import React from 'react';
import styled from '@emotion/native';

const StyledRow = styled.View`
  flex-direction: row;
  margin: ${(props) => props.margin || '20px 0 0'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  align-items: ${(props) => props.alignItems || 'center'};
`;

const Row = ({ children, ...props }) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default Row;
