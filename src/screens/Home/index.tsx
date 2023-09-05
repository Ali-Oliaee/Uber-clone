import React from 'react';
import {Text, View} from 'react-native';
import LocationBanner from '../../components/LocationBanner';
import styles from './styles';
import CarICon from '../../assets/images/carIcon';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LocationBanner />
      <Text>Home screen</Text>
      <CarICon />
    </View>
  );
};

export default HomeScreen;
