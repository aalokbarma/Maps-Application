import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE}
       style={Styles.map}
       region={{
         latitude: 22.7310952,
         longitude: 88.3279996,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
  )
}

export default HomeScreen;