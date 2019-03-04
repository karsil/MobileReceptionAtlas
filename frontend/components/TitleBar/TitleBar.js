import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './TitleBar.Styles';

export default class TitleBar extends React.Component {
    render() {
        return (
            <View style={styles.toolbar}>
                <Text style={styles.toolbarButton}>Add</Text>
                <Text style={styles.toolbarTitle}>This is the title</Text>
                <Text style={styles.toolbarButton}>Like</Text>
            </View>
        );
    }
}
