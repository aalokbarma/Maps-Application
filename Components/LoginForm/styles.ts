import { StyleSheet } from "react-native";
import Colors from "../../Assets/Colors/Colors";

const Styles = StyleSheet.create({
    form: {
        width: '100%',
        height: 'auto',
        padding: 25,
        backgroundColor: Colors.background,
        marginTop: 50,
    },
    formHeader: {
        color: '#0B1F43',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    inputRow:{
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#D6D6D6',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
    },
    phoneImage:{
        width: 25,
        height: 25,
    },
    phoneInput: {
        fontSize: 18,
        marginLeft: 5,
        flex: 1,
        color: '#121212',
    },
    mailImage: {
        width: 20,
        height: 20,
        margin: 2.5,
    },
    lockImage: {
        width: 20,
        resizeMode: 'contain',
        height: 20,
        margin: 2.5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    forgetPassContainer: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginVertical: 10,
    },
    forgetPassText: {
        color: '#2154B6',
        fontWeight: '500',
    },
    
    signUpButtonContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
        paddingBottom: 5,
    },
    signUpButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A5EDE',
        padding: 15,
        borderRadius: 10,
    },
    signUpText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
    },
    termsConditions: {
        
    },
    termsText:{
        fontWeight: '500',
        color: '#121212',
        fontSize: 11.5,
    },
    conditionsText: {
        fontWeight: '500',
        color: '#5D8DE7',
        fontSize: 11.5,
    },
    errorMessage:{
        color: '#f00',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12,
        marginTop: 2,
        textAlign: 'right',
    },
    inputContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Colors.buttonPrimary,
        paddingLeft: 10,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    inputRowContainer: {

    },
    inputField: {
        color: Colors.black,
        flex: 1,
    },
    inputLabelText: {
        marginLeft: 5,
        fontSize: 11,
        fontWeight: '800',
        color: Colors.black,
        marginBottom: -8,
        backgroundColor: Colors.background,
        paddingHorizontal: 3,
        zIndex: 10,
        width: 147,
    },
    passwordInputLabelText: {
        marginLeft: 5,
        fontSize: 11,
        fontWeight: '800',
        color: Colors.black,
        marginBottom: -8,
        backgroundColor: Colors.background,
        paddingHorizontal: 3,
        zIndex: 10,
        width: 58,
    },
    errorContainer: {
        width: '100%',
        marginTop: 10,
    },
    emailButtonContainer: {
        marginTop: 15,
        marginBottom: 10
    },
    codeButtonContainer: {

    },
    forgetPasswordContainer: {
        display: 'flex',
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    rememberMeContainer: {
        display: 'flex',
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rememberMeText: {
        fontSize: 14,
        color: Colors.black
    },
    forgetPasswordText: {
        fontSize: 16,
        color: Colors.buttonPrimary
    },
    checkBox: {
        // backgroundColor: Colors.buttonPrimary
    },
});

export default Styles;