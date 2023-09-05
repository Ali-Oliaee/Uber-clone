import React from 'react';
import {Text, View} from 'react-native';
import LocationBanner from '../../components/LocationBanner';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <LocationBanner />
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
