import { StyleSheet } from "react-native";
import Colors from "../../Assets/Colors/Colors";

const Styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.buttonPrimary
    },
    buttonText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight:'400',
        textAlign: 'center',
        letterSpacing: 1,
    },
});

export default Styles;