import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LoginMethods from '../../Common/LoginMethods';
import Footer from '../../Common/Footer';
import Button from '../../Common/Button';

const LandingScreen = ({navigation}: any) => {

    const onLoginButtonPress = () => {
        navigation.navigate("Login")
    }

  return (
    <ScrollView style = {Styles.landingScreenContainer}>
        <View style = {Styles.mainContainer}>
          <Image
              source={require('../../Assets/Images/group1.png')}
              style = {Styles.groupImage}
          />
          <View style = {{marginBottom: 15}}>
            <Button 
              title = {"Signup/Login"}
              primary = {true}
              onPressFunction = {() => onLoginButtonPress()}
              width = {315}
            />
          </View>
          <LoginMethods />
        </View>
      <Footer />
    </ScrollView>
  )
}

export default LandingScreen;