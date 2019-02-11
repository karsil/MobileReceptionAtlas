import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View, Button } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';
import {
    getAllConnectionDataAction,
    createConnectionData,
    showMap,
} from './ButtonField.Action';

class ButtonField extends React.Component {
    recieveData = () => {
        this.props.getConnectionInfo();
    };

    storeData = () => {
        this.props.storeConnectionInfo(this.props);
    };

    render() {
        return (
            <View style={buttonStyles.container}>
                <Button
                    style={buttonStyles.button}
                    onPress={() => this.storeData()}
                    title="DEV: Fetch data"
                />
                <Button
                    style={buttonStyles.button}
                    onPress={() => alert('Dummy: Send own data')}
                    title="Send own data"
                />
                <Button
                    style={buttonStyles.button}
                    onPress={() => this.props.showMap(true)}
                    title="View map"
                />
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        location: currentInformation.location,
        signal: currentInformation.signal,
        provider: currentInformation.provider,
        platform: currentInformation.platform,
        connectionType: currentInformation.connectionType,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionInfo: getAllConnectionDataAction,
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
