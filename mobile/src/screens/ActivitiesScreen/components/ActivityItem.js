import React from 'react';
import { Container, Title, Text, Information, Subtitle } from '../../../styles/components';
import { Image, View } from 'react-native';
import icon from '../../../../assets/icon.png';
import styled from '@emotion/native';
import { font, spacing } from '../../../styles/constants';

const StyledImage = styled(Image)`
  width: 75;
  height: 75;
  margin-top: -30px;
  margin-right: 20px;
`;

const StyledView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${spacing.medium};
`;

const ActivityItem = () => {
  return (
    <Container paddingHorizontal={24} paddingVertical={10}>
      <StyledView>
        <StyledImage source={icon} />
        <View>
          <Title fontSize={font.medium}>Justin Christianson</Title>
          <Text fontSize={font.small}>10:11am, 25th May 2020, Marlow, UK</Text>
        </View>
      </StyledView>
      <Subtitle fontSize={font.default}>1.5km Ergo Sprint</Subtitle>
      <StyledView>
        <Information type="Activity" value="Ergo" />
        <Information type="Activity" value="Ergo" />
        <Information type="Activity" value="Ergo" />
        <Information type="Activity" value="Ergo" />
      </StyledView>
    </Container>
  );
};

export default ActivityItem;
