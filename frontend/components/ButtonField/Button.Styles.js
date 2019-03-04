import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const buttonStyles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primaryColor,
        textAlign: 'center',
        borderRadius: 7,
        margin: 6,
        padding: 10,
    },
    buttonText: {
        width: '100%',
        textAlign: 'center',
        color: colors.secondaryColor,
    },
});
