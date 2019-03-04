import { StyleSheet } from 'react-native';
import styleVariables from '../../settings/styles';

export const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: styleVariables.color.primaryColor,
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    toolbarButton: {
        width: 50,
        color: '#fff',
        textAlign: 'center',
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
    },
});
