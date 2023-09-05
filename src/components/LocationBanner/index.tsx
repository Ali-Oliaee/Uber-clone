import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const LocationBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        To find your pickup location automatically, turn on location services
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Turn on location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationBanner;
