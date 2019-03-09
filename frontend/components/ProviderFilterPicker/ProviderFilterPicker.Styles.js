import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const providerFilterStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        maxHeight: 40,
    },

    picker: {
        backgroundColor: colors.primaryColor,
        fontWeight: "bold",
        fontSize: 14
    },
    pickerSelect: {
        backgroundColor: colors.secondaryColor
    },

    text: {
        fontSize: 18,
        color: colors.textColor,
        backgroundColor: colors.primaryColor
    },
});
