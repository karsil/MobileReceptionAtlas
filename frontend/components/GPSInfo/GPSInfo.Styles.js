import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const GPSInfoStyles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {},
    header: {
        fontWeight: 'bold',
    },
});
