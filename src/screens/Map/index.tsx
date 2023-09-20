import React, {useEffect, useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Mapbox, {
  Location,
  UserLocation,
  Camera,
  PointAnnotation,
} from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(
  'pk.eyJ1Ijoicm5jb2RlciIsImEiOiJjbG1xand0eXowM2RyMndtcXI0cTVpbTF1In0.6dFX1RHNINotcwtn0epUeg',
);

const MapScreen: React.FC<NavigationProp> = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [markedLocation, setMarkedLocation] = useState<any>(null);
  const cameraRef = useRef<any>(null);

  const transferToCurrentLocation = () => {
    if (currentLocation) {
      cameraRef?.current?.setCamera({
        centerCoordinate: [
          currentLocation.coords.longitude,
          currentLocation.coords.latitude,
        ],
      });
    }
  };

  const markLocation = point => {
    const selectedPoint = point.geometry.coordinates;
    setMarkedLocation(selectedPoint);
  };

  useEffect(() => {
    transferToCurrentLocation();
  }, [currentLocation]);

  return (
    <View style={styles.page}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
          onPress={markLocation}
          logoEnabled={false}
          attributionEnabled={false}>
          <Camera ref={cameraRef} />
          <UserLocation minDisplacement={1} onUpdate={setCurrentLocation} />
          <PointAnnotation coordinate={markedLocation ?? [0, 0]} />
        </Mapbox.MapView>
      </View>
      <TouchableOpacity
        style={styles.hereButton}
        onPress={transferToCurrentLocation}>
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
