import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';
import Button from './Button.js';

import {
    getAllConnectionDataAction,
    getConnectionDataByRadiusAction,
    createConnectionData,
    showMap,
} from './ButtonField.Action';

import { NO_PROVIDER } from '../ProviderPicker/ProviderPicker';

class ButtonField extends React.Component {
    render() {
        const isProduction = process.env.NODE_ENV === 'production',
            hasWifi = this.props.connectionType === 'wifi',
            hasNoProvider = this.props.provider === NO_PROVIDER;

        if (this.props.showingMap) {
            return (
                <View style={buttonStyles.container}>
                    <Button
                        style={buttonStyles.button}
                        textStyle={buttonStyles.buttonText}
                        onPress={() => this.props.getConnectionInfo()}
                        title="Update Data"
                    />
                    <Button
                        style={buttonStyles.button}
                        onPress={() =>
                            this.props.getConnectionInfoByRadius(this.props)
                        }
                        title="Get Nearby Data"
                    />
                    <Button
                        style={buttonStyles.button}
                        onPress={() =>
                            this.props.storeConnectionInfo(this.props)
                        }
                        title="Send your Location Data"
                        disabled={(hasNoProvider || hasWifi) && isProduction}
                    />
                </View>
            );
        }
        return <View />;
    }
}

function mapStateToProps({ currentInformation, showingMap }) {
    return {
        location: currentInformation.location,
        signal: currentInformation.signal,
        provider: currentInformation.provider,
        platform: currentInformation.platform,
        connectionType: currentInformation.connectionType,
        showingMap: showingMap,
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
)(ButtonField);
