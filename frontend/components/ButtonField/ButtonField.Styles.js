import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const buttonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    button: {
        backgroundColor: colors.primaryColor,
    },
});
