import React from 'react';
import { Container, Title, Button } from '../../../styles/components';
import { font, colours } from '../../../styles/constants';
import styled from '@emotion/native';
import ActivityItem from './ActivityItem';
import { Subtitle } from '../../../styles/components';

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ActivitiesFeed = () => {
  return (
    <>
      <StyledView>
        <Subtitle fontSize={font.medium} colour={colours.blueDarker}>
          Activities feed
        </Subtitle>
        <Button inverted primary>
          New activity »
        </Button>
      </StyledView>
      <ActivityItem />
    </>
  );
};
export default ActivitiesFeed;
