import React from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { View, Button } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';
import * as actionCreators from './ButtonField.Action';

class ButtonField extends React.Component {
    recieveData = () => {
        this.props.getConnectionInfo();
        alert('Dummy: Send own data')
    }

    render() {
        return (
            <View style={buttonStyles.container}>
                <Button
                style={buttonStyles.button}
                onPress={() => this.recieveData()}
                title="Send own data"
                />
                <Button
                style={buttonStyles.button}
                onPress={() => alert('Dummy View map')}
                title="View map"
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        locationX: state.locationX,
        locationY: state.locationY,
        signal: state.signal,
        provider: state.provider
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionInfo: actionCreators.getAllConnectionDataAction
        },
        dispatch
    );
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonField);

