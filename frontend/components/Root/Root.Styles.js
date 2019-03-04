import { StyleSheet } from 'react-native';
import colors from '../../settings/colors';

export const rootStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        alignItems: 'center',
    },
});
