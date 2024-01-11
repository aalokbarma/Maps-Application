import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import LoginForm from '../../Components/LoginForm';
import Footer from '../../Common/Footer';
import LoginMethods from '../../Common/LoginMethods';

const LoginScreen = () => {
  return (
    <View style = {Styles.loginScreen}>
      <View style = {Styles.mainContainer}>
        <Image
          source={require('../../Assets/Images/appBanner.png')}
          style = {Styles.groupImage}
        />
        <LoginForm />
        <LoginMethods />
      </View>
      <Footer />
    </View>
  )
}

export default LoginScreen;