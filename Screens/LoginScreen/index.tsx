import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import LoginForm from '../../Components/LoginForm';
import Footer from '../../Common/Footer';
import LoginMethods from '../../Common/LoginMethods';
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}: any) => {
  return (
    <ScrollView style = {Styles.loginScreen}>
      <View style = {Styles.mainContainer}>
        <Image
          source={require('../../Assets/Images/appBanner.png')}
          style = {Styles.groupImage}
        />
        <LoginForm navigation = {navigation} />
        {/* <LoginForm navigation = {navigation} /> */}
        <LoginMethods />
      </View>
      <Footer />
      <View style = {Styles.marginView} />
    </ScrollView>
  )
}

export default LoginScreen;