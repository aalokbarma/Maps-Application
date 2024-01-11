import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert } from 'react-native';
import Styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../../Common/Button';
import Colors from '../../Assets/Colors/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

const reviewSchema = yup.object({
    Email:  yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    Password: yup.string()
        .required()
        .min(8)
});

interface loginFormTypes{
    navigation: {
        navigate: Function,
        push: Function,
        replace: Function,
    }
}

const LoginForm = ({ navigation}: any) => {
    const [securePass, setSecurePass] = useState(true);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onEyePress = () => {
        if (securePass == true) {
            setSecurePass(false)
        } else {
            setSecurePass(true)
        }
    };

    const onSubmit = async (value: any, actions: any) => {
        if(value.Email == "Admin@palipoint.com" && value.Password == "Test@123"){
            navigation.replace('Home')
        }
        else {
            Alert.alert('Login Failed', 'Kindly check your Email and Password');
        }
    }

    const onCodeClick  = () => {
        Alert.alert("Coming Soon")
    }

    return (
        <View style={Styles.form} testID="LoginFormContainer">
            <Formik
                initialValues={{Email: '', Password: '' }}
                validationSchema={reviewSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <View>
                        <View style = {Styles.inputRowContainer}>
                            <Text style = {Styles.inputLabelText}>User Name / Phone Number</Text>
                            <View style = {Styles.inputContainer}>
                                <TextInput 
                                    style = {Styles.inputField}
                                    placeholder= 'Joseph_desuza@ymail.com'
                                    placeholderTextColor={Colors.placeholder1}
                                    value= {props.values.Email}
                                    onChangeText = {props.handleChange('Email')}
                                    onBlur={props.handleBlur('Email')}
                                />
                                <Fontisto name="email" size={16} color= {Colors.buttonPrimary} />
                            </View>
                        </View>
                        <View style = {Styles.errorContainer}>
                            <Text style = {Styles.errorMessage}> { props.touched.Email && props.errors.Email} </Text>
                        </View>
                        <View style = {Styles.inputRowContainer}>
                            <Text style = {Styles.passwordInputLabelText}>Password</Text>
                            <View style = {Styles.inputContainer}>
                                <TextInput 
                                    style = {Styles.inputField}
                                    placeholder='Password'
                                    placeholderTextColor={Colors.placeholder1}
                                    value={props.values.Password}
                                    onChangeText={props.handleChange('Password')}
                                    onBlur={props.handleBlur('Password')}
                                    textContentType='password'
                                    secureTextEntry={securePass}
                                />
                                <Pressable onPress={() => onEyePress()}>
                                    {
                                        securePass ? <FontAwesome name="eye-slash" size={18} color= {Colors.buttonPrimary} />
                                        : 
                                        <FontAwesome name="eye" size={18} color= {Colors.buttonPrimary} />
                                    }
                                </Pressable>
                                
                            </View>
                        </View>
                        
                        <View style = {Styles.errorContainer}>
                            <Text style={Styles.errorMessage}> {props.touched.Password && props.errors.Password} </Text>
                        </View>

                        <View style = {Styles.forgetPasswordContainer}>
                            <View style = {Styles.rememberMeContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    style = {Styles.checkBox}
                                />
                                <Text style = {Styles.rememberMeText}>Remember Me</Text>
                            </View>
                            <TouchableOpacity onPress={() => onCodeClick()}>
                                <Text style = {Styles.forgetPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>


                        <View style = {Styles.emailButtonContainer}>
                            <Button
                                title = {"Continue with Email"}
                                primary
                                onPressFunction = {() => props.handleSubmit()}
                            />
                        </View>
                        <View style = {Styles.codeButtonContainer}>
                            <Button
                                title = {"Continue with Code"}
                                primary = {false}
                                onPressFunction = {() => onCodeClick()}
                            />
                        </View>
                    </View>
                )}
            </Formik>


        </View>
    )
}

export default LoginForm;