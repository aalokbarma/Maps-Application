import { StyleSheet } from "react-native";
import Colors from "../../Assets/Colors/Colors";

const Styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
        paddingTop: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    }
});

export default Styles;