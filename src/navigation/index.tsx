import React from 'react';
import HomeScreen from '@screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from '@screens/Map';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
