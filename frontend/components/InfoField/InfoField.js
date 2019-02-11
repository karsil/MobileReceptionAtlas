import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

import GPSInfo from '../GPSInfo/GPSInfo'

import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    render() {
        return (
            <View style={infoFieldStyles.container}>
            <GPSInfo></GPSInfo>
            <Text style={infoFieldStyles.text}>
                Signal: {this.props.signal}
            </Text>
            <Text style={infoFieldStyles.text}>Provider: {this.props.provider}</Text>
            </View>
        );
    }
}

function mapStateToProps({currentInformation}) {
    return {
        signal: currentInformation.signal,
        provider: currentInformation.provider
    };
}


export default connect(
  mapStateToProps,
  null
) (Info);

