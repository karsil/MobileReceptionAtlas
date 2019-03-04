import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const rootStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#808080',
        alignItems: 'stretch',
    },

    text: {
        margin: 30,
        backgroundColor: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'grey',
    },
});
