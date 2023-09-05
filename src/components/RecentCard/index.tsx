import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Props from './types';

const RecentCard: React.FC<Props> = ({title, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default RecentCard;
