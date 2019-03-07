import { StyleSheet } from 'react-native';

export const MapStyles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
