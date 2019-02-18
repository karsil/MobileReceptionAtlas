import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';
import {
    getAllConnectionDataAction,
    createConnectionData,
    showMap,
} from './ButtonField.Action';

class ButtonField extends React.Component {
    recieveData = () => {
        this.props.getConnectionInfo();
    };

    storeData = () => {
        this.props.storeConnectionInfo(this.props);
    };

    renderMapButton = () => {
        const { showingMap } = this.props;
        const title = showingMap ? 'Back' : 'View map';

        return (
            <Button
                style={buttonStyles.button}
                onPress={() => this.props.showMap(!showingMap)}
                title={title}
            />
        );
    };

    render() {
        return (
            <View style={buttonStyles.container}>
                <Button
                    style={buttonStyles.button}
                    onPress={() => this.recieveData()}
                    title="Update Data"
                />
                <Button
                    style={buttonStyles.button}
                    onPress={() => this.storeData()}
                    title="Send own data"
                />
                {this.renderMapButton()}
            </View>
        );
    }
}

function mapStateToProps({ currentInformation, showingMap }) {
    return {
        location: currentInformation.location,
        signal: currentInformation.signal,
        provider: currentInformation.provider,
        platform: currentInformation.platform,
        connectionType: currentInformation.connectionType,
        showingMap: showingMap,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionInfo: getAllConnectionDataAction,
            storeConnectionInfo: createConnectionData,
            showMap: showMap,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonField);
