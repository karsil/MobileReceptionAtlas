import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import GPSInfo from '../GPSInfo/GPSInfo';
import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    renderSignalField = () => {
        if (this.props.connectionType === 'wifi') {
            return (
                <Text style={infoFieldStyles.text}>
                    Connected by {this.props.connectionType}
                </Text>
            );
        }
        return (
            <Text style={infoFieldStyles.text}>
                Signal: {this.props.signal} ({this.props.connectionType})
            </Text>
        );
    };

    render() {
        return (
            <View style={infoFieldStyles.container}>
                <GPSInfo />
                {this.renderSignalField()}
                <Text style={infoFieldStyles.text}>
                    Platform: {this.props.platform}
                </Text>
                <Text style={infoFieldStyles.text}>
                    Provider: {this.props.provider}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        signal: currentInformation.signal,
        connectionType: currentInformation.connectionType,
        platform: currentInformation.platform,
        provider: currentInformation.provider,
    };
}

export default connect(mapStateToProps)(Info);
