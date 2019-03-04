import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: colors.primaryColor,
        paddingTop: 50,
        paddingBottom: 20,
        flexDirection: 'row',
    },
    toolbarButton: {
        width: 100,
        color: colors.secondaryColor,
        textAlign: 'center',
    },
    toolbarButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    toolbarTitle: {
        color: colors.secondaryColor,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
    },
});
