import React from 'react';
import {Text, View} from 'react-native';

const MapScreen: React.FC<NavigationProp> = ({navigation}) => {
  console.log(navigation);

  return (
    <View>
      <Text>Map Screen</Text>
    </View>
  );
};

export default MapScreen;
