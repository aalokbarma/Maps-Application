import { StyleSheet } from "react-native";
import Colors from "../../Assets/Colors/Colors";

const Styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
        paddingTop: 100,
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    groupImage: {
        width: '100%',
        resizeMode: 'contain',
    },
    marginView: {
        marginBottom: 120,
    }
});

export default Styles;