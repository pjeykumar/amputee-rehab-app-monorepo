import React from 'react';
import ExerciseBikeSvg from '../../../assets/images';
import { Subtitle, Text, Button } from '../../../styles/components';

const NoActivities = () => {
  return (
    <>
      <Subtitle fontSize={font.medium} margin={`${spacing.xsmall} 0 0`}>
        You have no activities
      </Subtitle>
      <Text margin={`${spacing.xsmall} 0 0`}>New activities will appear here in a feed when you add them.</Text>
      <ExerciseBikeSvg alignSelf={'center'} marginTop={50} marginBottom={50} />
      <Button large primary alignSelf={'center'}>
        Add an activity »
      </Button>
    </>
  );
};

export default NoActivities;
