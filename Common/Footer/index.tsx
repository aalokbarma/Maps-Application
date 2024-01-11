import { View, Text } from 'react-native'
import React from 'react'
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Footer = () => {
  return (
    <View style = {Styles.footerContainer}>
      <View style = {Styles.topContainer}>
        <TouchableOpacity>
            <Text style = {Styles.topContainerText}>
                Privacy
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style = {Styles.topContainerText}>
                Terms
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style = {Styles.topContainerText}>
                Sitemap
            </Text>
        </TouchableOpacity>
      </View>
      <View style = {Styles.bottomContainer}>
        <Text style = {Styles.bottomContainerText}>
            © 2023 DigiHorizon Recharge Vehicle Private Limited.
        </Text>
      </View>
    </View>
  )
}

export default Footer;