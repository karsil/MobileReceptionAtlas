import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const providerPickerStyles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: colors.background,
        alignItems: 'stretch',
    },
    picker: {
        height: 90,
        width: 150,
    },
    pickerItem: {
        fontSize: 18,
    },
});
