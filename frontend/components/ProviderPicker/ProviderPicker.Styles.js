import { StyleSheet } from 'react-native';
import styleVariables from '../../settings/styles';

export const providerPickerStyles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: styleVariables.content.justify,
        backgroundColor: styleVariables.color.background,
        alignItems: 'stretch',
    },

    picker: {
        height: 90,
        width: 150
    },
    pickerItem: {
        fontSize: 18,
    },
});
