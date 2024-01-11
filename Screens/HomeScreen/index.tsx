import { View, Text, PermissionsAndroid, Platform, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Styles from './styles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '../../Constants/Constants';
import MapViewDirections from 'react-native-maps-directions';
import GetLocation from 'react-native-get-location';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CurrLocationIcon from '../../Assets/Images/currLocation.png';

const HomeScreen = () => {

  const mapRef = useRef(null);
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [currLocation, setCurrLocation] = useState();

  const [locations, setLocations] = useState([
    {
      id: 1,
      latitude: 22.7310952,
      longitude: 88.3279996,
      title: "Rishra",
      description: 'This is a lovely city.',
    },
    {
      id: 2,
      latitude: 22.71937585,
      longitude: 88.33646117406498,
      title: "Rishra Park",
      description: 'A beautiful park to spend your time.',
    },
  ]);

  useEffect(() => {
    _getLocationPermission();
  }, []);

  async function _getLocationPermission(){
    if (Platform.OS == "android"){
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'Please grant permission to continue.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermissionGranted(true);
          _getCurrLocation();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  function _getCurrLocation(){
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 6000,
  })
  .then(location => {
      console.log( "Current Location" + JSON.stringify(location));
      setCurrLocation({latitude: location.latitude, longitude: location.longitude})
  })
  .catch(error => {
      const { code, message } = error;
  })
  }

  async function originLocationPointer(latitude: any, longitude: any) {
    setOrigin({latitude: latitude, longitude: longitude})
    mapRef.current.animateToRegion({
        latitude: latitude,
         longitude: longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.015,
    })
  }
  async function destinationLocationPointer(latitude: any, longitude: any) {
    setDestination({latitude: latitude, longitude: longitude})
    mapRef.current.animateToRegion({
        latitude: latitude,
         longitude: longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.015,
    })
  }
  async function moveToCurrentLocation() {
    mapRef.current.animateToRegion({
        latitude: currLocation?.latitude,
         longitude: currLocation?.longitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.015,
    })
  }

  if(!permissionGranted){
    return (
      <View style = {Styles.emptyScreenContainer}>
        <Text>Please grant permission to continue.</Text>
      </View>
    )
  }



  return (
    <View style={Styles.container}>
      {/* <View style = {Styles.inputFieldsContainer}> */}
        <View style = {Styles.currLocationSearch}>
          <GooglePlacesAutocomplete
          styles={{padding: 5}}
          fetchDetails = {true}
          placeholder='Enter origin'
          onPress={(data, details = null) => {
            originLocationPointer(details?.geometry?.location.lat, details?.geometry?.location.lng)
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          onFail={(err) => console.log(err)}
        />
        <GooglePlacesAutocomplete
          styles={{padding: 5}}
          fetchDetails = {true}
          placeholder='Enter destination'
          onPress={(data, details = null) => {
            destinationLocationPointer(details?.geometry?.location.lat, details?.geometry?.location.lng)
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          onFail={(err) => console.log(err)}
        />
        </View>
        {/* <View style = {Styles.currLocationSearch}>
          
      </View> */}

      {/* </View> */}
     <MapView
     ref={mapRef}
       provider={PROVIDER_GOOGLE}
       style={Styles.map}
       region={{
         latitude: 22.7310952,
         longitude: 88.3279996,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
       zoomEnabled={true}
        scrollEnabled={true}
        showsUserLocation={true}
     >
      {
        origin != undefined ?  <Marker
        coordinate={origin}
      />
      : null
      }
      {
        destination != undefined ?  <Marker
        coordinate={destination}
      />
      : null
      }
      {
        origin != undefined && destination != undefined ?
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="blue"
        />
        : null
      }
      {/* {
        locations.map((marker) => {
          return (
            <Marker
              key={marker.id}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              title={marker.title}
              description={marker.description}
            />
          )
        })
      } */}
      
     </MapView>
      {/* <View style = {Styles.bottomIconContainer}>
        <TouchableOpacity style = {Styles.currLocationIconContainer} onPress={() => moveToCurrentLocation()}>
          <Image 
            style = {Styles.currentLocationIcon}
            source={{uri : "https://cdn-icons-png.flaticon.com/512/2037/2037906.png"}}
          />
        </TouchableOpacity>
      </View> */}
   </View>
  )
}

export default HomeScreen;