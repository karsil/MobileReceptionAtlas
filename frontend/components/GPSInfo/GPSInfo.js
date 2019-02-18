import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './GPSInfo.Action';
import { GPSInfoStyles } from './GPSInfo.Styles';

class GPSInfo extends React.Component {
    componentWillMount() {
        this.props.requestLocation();
    }

    render() {
        return (
            <View style={GPSInfoStyles.container}>
                <Text style={GPSInfoStyles.header}>GPS:</Text>
                <Text style={GPSInfoStyles.text}>
                    X: {this.props.location.x}
                </Text>
                <Text style={GPSInfoStyles.text}>
                    Y: {this.props.location.y}
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            requestLocation: actionCreators.requestLocation,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GPSInfo);
