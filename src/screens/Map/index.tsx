import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(
  'pk.eyJ1Ijoicm5jb2RlciIsImEiOiJjbG1xand0eXowM2RyMndtcXI0cTVpbTF1In0.6dFX1RHNINotcwtn0epUeg',
);

const MapScreen: React.FC<NavigationProp> = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar translucent />
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
