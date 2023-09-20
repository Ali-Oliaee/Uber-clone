import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Mapbox, {UserLocation} from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(
  'pk.eyJ1Ijoicm5jb2RlciIsImEiOiJjbG1xand0eXowM2RyMndtcXI0cTVpbTF1In0.6dFX1RHNINotcwtn0epUeg',
);

const MapScreen: React.FC<NavigationProp> = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <UserLocation minDisplacement={1} />
        </Mapbox.MapView>
      </View>
      <TouchableOpacity style={styles.hereButton}>
        <Text />
      </TouchableOpacity>
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
  hereButton: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    width: 30,
    height: 30,
    bottom: 12,
    right: 12,
  },
});

export default MapScreen;
