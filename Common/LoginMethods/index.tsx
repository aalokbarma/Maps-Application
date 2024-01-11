import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginMethods = () => {
  return (
    <View style = {Styles.loginMethodsContainer}>
      <View style = {Styles.continueWithContainer}>
        <View style = {Styles.emptyView}/>
        <Text style = {Styles.continueWithText}>
            Continue With
        </Text>
        <View style = {Styles.emptyView}/>
      </View>
      <View style = {Styles.methodsContainer}>
        <TouchableOpacity>
            <Image 
                source = {require('../../Assets/Images/google.png')}
                style = {Styles.loginMethodIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
                source = {require('../../Assets/Images/fb.png')}
                style = {Styles.loginMethodIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image 
                source = {require('../../Assets/Images/linkedin.png')}
                style = {Styles.loginMethodIcon}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginMethods;