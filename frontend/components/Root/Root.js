import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Info from './../InfoField/InfoField';
import Map from './../Map/Map';
import ButtonField from './../ButtonField/ButtonField';
import { rootStyles } from './Root.Styles';
import { requestLocation, getPlatform, getConnectionInfo } from './Root.Action';
import ProviderPicker, { NO_PROVIDER } from '../ProviderPicker/ProviderPicker';
class Root extends React.Component {
    constructor(props) {
        super(props);
        props.requestLocation();
        props.getPlatform();
        props.getConnectionInfo();
        this.state = {
            fullscreenMap: false
        }
    }
    toggleMapFullscreen = () => {
        this.setState({fullscreenMap: !this.state.fullscreenMap})
    }

    renderMapOrInfoField = () => {
        if (this.props.showingMap) {
            return (
                    <TouchableWithoutFeedback
                        onLongPress={this.toggleMapFullscreen}
                    >
                        <View style={rootStyles.container}>
                            <Map />
                            <Text style={rootStyles.text}>Toggle map size by hold and drop</Text>
                        </View>
                    </TouchableWithoutFeedback>
            );
        }
        return <Info />;
    };

    renderButtonField = () => {
        if (this.state.fullscreenMap === false){
            return (
                <View style={{ flex: 2 }}>
                    <ButtonField />
                </View>
            )
        }
    }

    render() {
        const { provider } = this.props;
        if (provider === NO_PROVIDER) {
            return <ProviderPicker />;
        }
        return (
            <View style={[rootStyles.container, { alignItems: 'stretch' }]}>
                <View style={{ flex: 4, backgroundColor: '#333' }}>
                    {this.renderMapOrInfoField()}
                </View>
                {this.renderButtonField()}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showingMap: state.showingMap,
        provider: state.currentInformation.provider,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            requestLocation: requestLocation,
            getPlatform: getPlatform,
            getConnectionInfo: getConnectionInfo,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
