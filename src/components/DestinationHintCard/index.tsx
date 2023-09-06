import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';

const DestinationHintCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>DestinationHintCard</Text>
        <Text style={styles.description}>Tell us whenever you to go.</Text>
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <Text>close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DestinationHintCard;
