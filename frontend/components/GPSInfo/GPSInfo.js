import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { GPSInfoStyles } from './GPSInfo.Styles';

class GPSInfo extends React.Component {
    render() {
        return (
            <View style={GPSInfoStyles.container}>
                <Text style={GPSInfoStyles.header}>GPS:</Text>
                <Text style={GPSInfoStyles.text}>
                    Latitude: {this.props.location.latitude}
                </Text>
                <Text style={GPSInfoStyles.text}>
                    Longitude: {this.props.location.longitude}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        location: currentInformation.location,
    };
}

export default connect(mapStateToProps)(GPSInfo);
