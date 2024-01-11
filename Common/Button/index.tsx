import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import Colors from '../../Assets/Colors/Colors';

const Button = (props: any) => {
    const {title, primary, onPressFunction} = props;
  return (
    <View style = {[Styles.buttonContainer, {width: props.width ? props.width : "100%"}]}>
        <TouchableOpacity style = {[Styles.button, {backgroundColor: primary ? Colors.buttonPrimary : Colors.white, width: props.width ? props.width : "100%"}]} onPress={() => onPressFunction()}>
            <Text style = {Styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button;