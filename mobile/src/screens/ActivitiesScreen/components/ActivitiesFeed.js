import React from 'react';
import { Container, Title, Button } from '../../../styles/components';
import { font, colours } from '../../../styles/constants';
import styled from '@emotion/native';
import ActivityItem from './ActivityItem';
import { Subtitle, Row } from '../../../styles/components';

const ActivitiesFeed = () => {
  return (
    <>
      <Row margin={0}>
        <Subtitle fontSize={font.medium} colour={colours.blueDarker}>
          Activities feed
        </Subtitle>
        <Button inverted primary>
          New activity »
        </Button>
      </Row>
      <ActivityItem />
    </>
  );
};
export default ActivitiesFeed;
