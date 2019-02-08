import { StyleSheet } from 'react-native';
import styleVariables from '../../settings/styles';

export const rootStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: styleVariables.color.background,
        alignItems: styleVariables.alignment.items,
    },
});
