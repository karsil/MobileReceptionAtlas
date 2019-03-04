import React from 'react';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { styles } from './TitleBar.Styles';

import Button from '../ButtonField/Button';

import {
    createConnectionData,
    getAllConnectionDataAction,
    getConnectionDataByRadiusAction,
    showMap,
} from '../ButtonField/ButtonField.Action';
import { connect } from 'react-redux';

class TitleBar extends React.Component {
    render() {
        const { showingMap } = this.props;
        return (
            <View style={styles.toolbar}>
                <Button
                    onPress={() => this.props.showMap(!showingMap)}
                    disabled={!showingMap}
                    style={styles.toolbarButton}
                    title={showingMap ? 'Back' : ''}
                />
                <Text style={styles.toolbarTitle}>
                    Your Provider: {this.props.currentInformation.provider}
                </Text>
                <Button
                    onPress={() => this.props.showMap(!showingMap)}
                    disabled={showingMap}
                    style={styles.toolbarButton}
                    title={showingMap ? '' : 'Show Map'}
                />
            </View>
        );
    }
}

function mapStateToProps({ currentInformation, showingMap }) {
    return {
        showingMap,
        currentInformation,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionInfo: getAllConnectionDataAction,
            getConnectionInfoByRadius: getConnectionDataByRadiusAction,
            storeConnectionInfo: createConnectionData,
            showMap: showMap,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleBar);
