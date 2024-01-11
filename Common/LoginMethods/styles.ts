import { StyleSheet } from "react-native";
import Colors from "../../Assets/Colors/Colors";

const Styles = StyleSheet.create({
    loginMethodsContainer: {
        width: '100%',
        height: 'auto',
    },
    continueWithContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    methodsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        padding: 25,
    },
    emptyView: {
        height: 1,
        width: 90,
        backgroundColor: Colors.placeholder1
    },
    continueWithText: {
        color: Colors.black,
        fontSize: 18,
        backgroundColor: Colors.fullWhite,
        paddingHorizontal: 7,
        paddingVertical: 3,
    },
    loginMethodIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 10,
    },


});

export default Styles;