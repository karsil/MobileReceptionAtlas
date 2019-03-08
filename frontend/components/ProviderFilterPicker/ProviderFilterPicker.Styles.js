import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const providerFilterStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.background,
        alignItems: 'center',
        maxHeight: 40,
    },

    picker: {
        width: 100,
        height: 30,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    },
});
