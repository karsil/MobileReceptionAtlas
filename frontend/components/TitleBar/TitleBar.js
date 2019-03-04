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
    renderTitle = () => {
        const { showingMap, currentInformation } = this.props;
        if (showingMap) {
            return (
                <View style={[styles.toolbarTitle, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 11 }}>
                        Your Provider: {currentInformation.provider}
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                        Latitude: {currentInformation.location.latitude}
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                        Longitude: {currentInformation.location.longitude}
                    </Text>
                </View>
            );
        }
        return (
            <Text style={[styles.toolbarTitle, { fontSize: 15 }]}>
                Your Current Device Information
            </Text>
        );
    };

    render() {
        const { showingMap } = this.props;
        return (
            <View style={styles.toolbar}>
                <Button
                    onPress={() => this.props.showMap(!showingMap)}
                    disabled={!showingMap}
                    style={styles.toolbarButton}
                    textStyle={styles.toolbarButtonText}
                    title={showingMap ? 'Back' : ''}
                />
                {this.renderTitle()}
                <Button
                    onPress={() => this.props.showMap(!showingMap)}
                    disabled={showingMap}
                    style={styles.toolbarButton}
                    textStyle={styles.toolbarButtonText}
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
