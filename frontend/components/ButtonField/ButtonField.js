import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { buttonFieldStyles } from './ButtonField.Styles';
import Button from './Button.js';
import { config } from '../../settings/config';

import {
    getConnectionDataAction,
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
                <View style={buttonFieldStyles.container}>
                    <Button
                        style={buttonFieldStyles.button}
                        onPress={() => this.props.getConnectionDataAction()}
                        title="Get All Data"
                    />
                    <Button
                        style={buttonFieldStyles.button}
                        onPress={() =>
                            this.props.getConnectionDataAction(
                                config.searchRadius
                            )
                        }
                        title="Get Nearby Data"
                    />
                    <Button
                        style={buttonFieldStyles.button}
                        onPress={() => this.props.createConnectionInfo()}
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
        provider: currentInformation.provider,
        platform: currentInformation.platform,
        connectionType: currentInformation.connectionType,
        showingMap: showingMap,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionDataAction: getConnectionDataAction,
            createConnectionInfo: createConnectionData,
            showMap: showMap,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonField);
