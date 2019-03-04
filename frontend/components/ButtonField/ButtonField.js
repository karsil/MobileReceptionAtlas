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
    renderMapButton = () => {
        const { showingMap } = this.props;
        const title = showingMap ? 'Back' : 'View map';

        return (
            <Button
                onPress={() => this.props.showMap(!showingMap)}
                title={title}
            />
        );
    };

    render() {
        const isProduction = process.env.NODE_ENV === 'production',
            hasWifi = this.props.connectionType === 'wifi',
            hasNoProvider = this.props.provider === NO_PROVIDER;
        return (
            <View style={buttonStyles.container}>
                <Button
                    onPress={() => this.props.getConnectionInfo()}
                    title="Update Data"
                />
                <Button
                    onPress={() =>
                        this.props.getConnectionInfoByRadius(this.props)
                    }
                    title="Get By Radius"
                />
                <Button
                    onPress={() => this.props.storeConnectionInfo(this.props)}
                    title="Send own data"
                    disabled={(hasNoProvider || hasWifi) && isProduction}
                />
                {this.renderMapButton()}
            </View>
        );
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
