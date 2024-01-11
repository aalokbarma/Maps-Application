import { StyleSheet } from "react-native";
import Colors from "../../Assets/Colors/Colors";

const Styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        marginTop: 20,
    },
    topContainerText: {
        marginHorizontal: 10,
        color: Colors.placeholder1
    },
    bottomContainerText: {
        textAlign: 'center',
        color: Colors.placeholder1
    },
});

export default Styles;