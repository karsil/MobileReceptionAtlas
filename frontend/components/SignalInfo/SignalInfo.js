import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestSignalInfo } from './SignalInfo.Action';
import { SignalInfoStyles } from './SIgnalInfo.Styles';

class SignalInfo extends React.Component {
    componentWillMount() {
        this.props.requestSignalInfo();
    }

    render() {
        return (
            <View style={SignalInfoStyles.container}>
                <Text style={SignalInfoStyles.header}>Signal:</Text>
                <Text style={SignalInfoStyles.text}>
                    Type: {this.props.connectionType}
                </Text>
                <Text style={SignalInfoStyles.text}>
                    Strength: {this.props.signalStrength}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        connectionType: currentInformation.connectionType,
        signalStrength: currentInformation.signal,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            requestSignalInfo: requestSignalInfo,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignalInfo);
