import React from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions';
import { infoFieldStyles } from './InfoField.Styles';

class Info extends React.Component {
    render() {
        return (
            <View style={infoFieldStyles.container}>
                <Text style={infoFieldStyles.text}>
                    GPS: X{this.props.locationX}/ Y{this.props.locationY}
                </Text>
                <Text style={infoFieldStyles.text}>
                    Signal: {this.props.signal}
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
        locationX: currentInformation.locationX,
        locationY: currentInformation.locationY,
        signal: currentInformation.signal,
        provider: currentInformation.provider,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updateGPS: actionCreators.updateGPS,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);
