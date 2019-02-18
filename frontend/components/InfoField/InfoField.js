import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import GPSInfo from '../GPSInfo/GPSInfo';

import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    render() {
        return (
            <View style={infoFieldStyles.container}>
                <GPSInfo />
                <Text style={infoFieldStyles.text}>
                    Signal: {this.props.signal} ({this.props.connectionType})
                </Text>
                <Text style={infoFieldStyles.text}>
                    Provider: {this.props.provider}
                </Text>
                <Text style={infoFieldStyles.text}>
                    Platform: {this.props.platform}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        locationX: currentInformation.locationX,
        locationY: currentInformation.locationY,
        signal: currentInformation.signal,
        connectionType: currentInformation.connectionType,
        provider: currentInformation.provider,
        platform: currentInformation.platform,
    };
}

export default connect(
    mapStateToProps,
    null
)(Info);
