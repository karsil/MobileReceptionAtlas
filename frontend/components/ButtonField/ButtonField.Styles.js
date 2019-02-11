import { StyleSheet } from 'react-native';
import styleVariables from '../../settings/styles';

export const buttonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: styleVariables.content.justify,
        backgroundColor: styleVariables.color.background,
        alignItems: 'stretch',
    },

    button: {
        width: '100',
    },
});
