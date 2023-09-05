import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LocationBanner from '@components/LocationBanner';
import styles from './styles';
import CarICon from '@assets/images/carIcon';
import BoxIcon from '@assets/images/boxIcon';
import RecentCard from '@components/RecentCard';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LocationBanner />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={1}>
          <CarICon style={styles.icon} />
          <Text>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={1}>
          <BoxIcon style={styles.icon} />
          <Text>Package</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={1}>
          <CarICon style={styles.icon} />
          <Text>Fast Ride</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>Enter pickup point</Text>
      </TouchableOpacity>
      <View style={styles.recentContainer}>
        <Text style={styles.recentTitle}>Go Again</Text>
        <RecentCard title="Work" description="JohnF Blvd, no39" />
        <RecentCard title="School" description="JohnF Blvd, no39" />
      </View>
    </View>
  );
};

export default HomeScreen;
