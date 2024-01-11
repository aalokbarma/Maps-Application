import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Assets/Colors/Colors";


const Styles = StyleSheet.create({
    landingScreenContainer: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
        paddingTop: 20,
        width:'100%',
        height: '100%',
    },
    groupImage: {
        width: Dimensions.get('window').width-10,
        resizeMode: 'contain',
        // height: 200
    },
    buttonContainer: {
        width: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupButton: {
        backgroundColor: Colors.buttonPrimary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 315,
        padding: 12,
        borderRadius: 10,

    },
    signupButtonText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight:'400',
        textAlign: 'center',
        letterSpacing: 1,
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },

});

export default Styles;