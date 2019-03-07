import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import GPSInfo from '../GPSInfo/GPSInfo';
import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    renderConnectionTypeField = () => {
        if (this.props.connectionType === 'wifi') {
            return (
                <Text style={infoFieldStyles.text}>
                    Connected by {this.props.connectionType}
                </Text>
            );
        }
        return (
            <Text style={infoFieldStyles.text}>
                Connection Type ({this.props.connectionType})
            </Text>
        );
    };

    render() {
        return (
            <View style={infoFieldStyles.container}>
                <GPSInfo />
                {this.renderConnectionTypeField()}
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
        connectionType: currentInformation.connectionType,
        platform: currentInformation.platform,
        provider: currentInformation.provider,
    };
}

export default connect(mapStateToProps)(Info);
