import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
      },
      currLocationSearch: {
        width: '100%',
        zIndex: 10,
        flex: 0.5,
        padding: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      },
      emptyScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      currLocationIconContainer: {
        width: 50,
        height: 50,
        zIndex: 1000,
        position: 'absolute',
        right: 10,
        bottom: 0,
        borderRadius: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        // overflow: 'hidden',
      },
      currentLocationIcon:{
        width: 50,
        height: 50,
      },
      inputFieldsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
      },
      bottomIconContainer: {
        flex: 0.5,
        width: '100%',
        height: 0,
        // backgroundColor: 'red',
        zIndex: 100
      },
});

export default Styles;