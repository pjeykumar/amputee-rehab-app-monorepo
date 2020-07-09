import React from 'react';
import { Text } from '../../styles/components';
import AddSymbolSvg from '../../../assets/images/AddSymbolSvg';
import styled from '@emotion/native';

const StyledInformation = styled.View`
  flex-direction: row;
`;

const Information = ({ type, value }) => {
  const properties = {
    Activity: value,
    Distance: `${value}m`,
    Duration: `${value} minutes`,
    Exertion: `${value} out of 10`,
  };

  return (
    <StyledInformation>
      <AddSymbolSvg />
      <Text>{type}</Text>
      <Text>{properties[type]}</Text>
    </StyledInformation>
  );
};

export default Information;