import { StyleSheet } from 'react-native';
import styleVariables from '../../settings/styles';

export const providerPickerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background,
        alignItems: 'center',
    },

    picker: {
        height: 250,
        width: 200,
    },
    pickerItem: {
        fontSize: 18,
    },

    text: {
        fontSize: 18,
    },

    headerText: {
        fontSize: 22,
        margin: 10,
        fontWeight: 'bold',
    },
});
