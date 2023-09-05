import React from 'react';
import {Text, View} from 'react-native';
import LocationBanner from '@components/LocationBanner';
import styles from './styles';
import CarICon from '@assets/images/carIcon';
import BoxIcon from '@assets/images/boxIcon';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LocationBanner />
      <Text>Home screen</Text>
      <CarICon />
      <BoxIcon />
    </View>
  );
};

export default HomeScreen;
