import React from 'react';
import { Text } from '../../styles/components';
import { font, colours } from '../../styles/constants';
import AddSymbolSvg from '../../../assets/images/AddSymbolSvg';
import styled from '@emotion/native';

const StyledInformation = styled.View`
  flex-direction: row;
  width: 50%;
  margin-top: 8px;
`;

const Information = ({ type, value }) => {
  const properties = {
    Activity: { value, icon: <AddSymbolSvg /> },
    Distance: `${value}m`,
    Duration: `${value} minutes`,
    Exertion: `${value} out of 10`,
  };

  return (
    <StyledInformation>
      {properties[type].icon}
      <Text fontWeight={font.bold} colour={colours.blueDarker} margin="0 5px 0 14px">
        {type}
      </Text>
      <Text colour={colours.blueDarker}>{properties[type].value}</Text>
    </StyledInformation>
  );
};

export default Information;
