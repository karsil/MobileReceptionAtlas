import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GPSInfo from '../GPSInfo/GPSInfo';

import * as actionCreators from './InfoField.Action'
import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    componentDidMount(){
        this.props.getPlatform()
    }

    render() {
        return (
            <View style={infoFieldStyles.container}>
                <GPSInfo />
                <Text style={infoFieldStyles.text}>
                    Signal: {this.props.signal}
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
        provider: currentInformation.provider,
        platform: currentInformation.platform,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getPlatform: actionCreators.getPlatform,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);
