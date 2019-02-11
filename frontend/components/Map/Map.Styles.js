import { StyleSheet } from 'react-native';
import styleVariables from './../../settings/styles';

export const MapStyles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});