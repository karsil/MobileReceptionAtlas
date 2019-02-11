import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';

import * as actionCreators from './ButtonField.Action';

class ButtonField extends React.Component {
    recieveData = () => {
        this.props.getConnectionInfo();
    };

    render() {
        return (
            <View style={buttonStyles.container}>
                <Button
                    style={buttonStyles.button}
                    onPress={() => this.recieveData()}
                    title="DEV: Fetch data"
                />
                <Button
                    style={buttonStyles.button}
                    onPress={() => alert('Dummy: Send own data')}
                    title="Send own data"
                />
                <Button
                    style={buttonStyles.button}
                    onPress={() => this.props.showMap(true)}
                    title="View map"
                />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionInfo: actionCreators.getAllConnectionDataAction,
            showMap: actionCreators.showMap
        },
        dispatch
    );
}

export default connect(
    null,
    mapDispatchToProps
) (ButtonField);

