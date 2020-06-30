import React from 'react';
import { SafeAreaView as DefaultSafeAreaView } from 'react-native';
import { colours } from '../constants';

// SafeAreaView unable to be styled using Emotion, must be inline

const SafeAreaView = ({ children, flex = 1, backgroundColor = colours.blueDarker }) => {
  return <DefaultSafeAreaView style={{ flex, backgroundColor }}>{children}</DefaultSafeAreaView>;
};

export default SafeAreaView;
