import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';
import {
    getAllConnectionDataAction,
    getConnectionDataByRadiusAction,
    createConnectionData,
    showMap,
} from './ButtonField.Action';

const AppButton = (props) => {
    return (
        <Button
            title={props.title}
            onPress={props.onPress}
            constainerStyle={{ margin: '15' }}
            clear
            {...props}
        />
    );
};

class ButtonField extends React.Component {
    renderMapButton = () => {
        const { showingMap } = this.props;
        const title = showingMap ? 'Back' : 'View map';

        return (
            <AppButton
                onPress={() => this.props.showMap(!showingMap)}
                title={title}
            />
        );
    };

    render() {
        return (
            <View style={buttonStyles.container}>
                <AppButton
                    onPress={() => this.props.getConnectionInfo()}
                    title="Update Data"
                />
                <AppButton
                    onPress={() =>
                        this.props.getConnectionInfoByRadius(this.props)
                    }
                    title="Get By Radius"
                />
                <AppButton
                    onPress={() => this.props.storeConnectionInfo(this.props)}
                    title="Send own data"
                    disabled={
                        this.props.connectionType === 'wifi' &&
                        !(process.env.NODE_ENV === 'development')
                    }
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
            getConnectionInfoByRadius: getConnectionDataByRadiusAction,
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
