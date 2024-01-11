import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import LandingScreen from '../Screens/LandingScreen';

const Stack = createStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
            <Stack.Group screenOptions={{headerShown : false}}>
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation