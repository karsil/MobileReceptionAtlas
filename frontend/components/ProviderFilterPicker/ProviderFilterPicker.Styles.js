import { StyleSheet } from 'react-native';
import styleVariables from '../../settings/styles';

export const providerFilterStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: styleVariables.content.justify,
        backgroundColor: styleVariables.color.background,
        alignItems: 'center',
        maxHeight: 190,
    },

    picker: {
        width: 100,
        height: 190,
        justifyContent: styleVariables.content.justify,
    },
    text: {
        fontSize: 18,
    },
});
