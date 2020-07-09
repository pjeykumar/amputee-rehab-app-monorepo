import React from 'react';
import { font } from '../../styles/constants';
import { Layout, Title, Text, Button } from '../../styles/components';
import { spacing } from '../../styles/constants';
import ActivitiesFeed from './components/ActivitiesFeed';

const ActivitiesScreen = () => (
  <Layout>
    <Title>Activities</Title>
    <ActivitiesFeed />
  </Layout>
);

export default ActivitiesScreen;
