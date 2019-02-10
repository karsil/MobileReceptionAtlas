import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

import { infoFieldStyles } from './InfoField.Styles';

import { requestLocation } from '../../helper/GPSHelper'

class Info extends React.Component {
    componentWillMount() {
        this.props.dispatch(requestLocation())
      }

    render() {
        return (
            <View style={infoFieldStyles.container}>
            <Text style={infoFieldStyles.text}>
                GPS:
            </Text>
            <Text style={infoFieldStyles.text}>
                X: {this.props.locationX}
            </Text>
            <Text style={infoFieldStyles.text}>
                Y: {this.props.locationY}
            </Text>
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
        locationX: currentInformation.locationX,
        locationY: currentInformation.locationY,
        signal: currentInformation.signal,
        provider: currentInformation.provider
    };
}


export default connect(
  mapStateToProps,
  null
) (Info);

