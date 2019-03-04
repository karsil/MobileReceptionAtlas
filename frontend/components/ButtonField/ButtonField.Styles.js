import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const buttonStyles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'row',
    },
    buttonText: {},
    button: {
        borderWidth: 0.3,
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: colors.primaryColor,
    },
});
