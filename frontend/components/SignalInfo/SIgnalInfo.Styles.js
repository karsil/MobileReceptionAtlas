import { StyleSheet } from 'react-native';
import styleVariables from './../../settings/styles';

export const SignalInfoStyles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: styleVariables.color.background,
        alignItems: styleVariables.alignment.items,
        justifyContent: styleVariables.content.justify,
    },
    text: {},
    header: {
        fontWeight: 'bold',
    },
});
