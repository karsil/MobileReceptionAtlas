import { StyleSheet } from 'react-native';
import styleVariables from './../../settings/styles';

export const infoFieldStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleVariables.color.background,
        alignItems: styleVariables.alignment.items,
        justifyContent: styleVariables.content.justify,
    },
    text: {},
});
