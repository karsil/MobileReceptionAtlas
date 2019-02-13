import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import GPSInfo from '../GPSInfo/GPSInfo';
import SignalInfo from '../SignalInfo/SignalInfo'

import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    render() {
        return (
            <View style={infoFieldStyles.container}>
                <GPSInfo />
                <SignalInfo />
                <Text style={infoFieldStyles.text}>
                    Provider: {this.props.provider}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        locationX: currentInformation.locationX,
        locationY: currentInformation.locationY,
        provider: currentInformation.provider,
    };
}

export default connect(
    mapStateToProps,
    null
)(Info);
