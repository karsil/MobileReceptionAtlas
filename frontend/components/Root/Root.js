import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Info from './../InfoField/InfoField';
import Map from './../Map/Map';
import ButtonField from './../ButtonField/ButtonField';
import ProviderFilterPicker from '../ProviderFilterPicker/ProviderFilterPicker'
import { rootStyles } from './Root.Styles';
import { requestLocation, getPlatform, getConnectionInfo } from './Root.Action';

class Root extends React.Component {
    constructor(props) {
        super(props);
        props.requestLocation();
        props.getPlatform();
        props.getConnectionInfo()
    }

    renderMapOrInfo = () => {
        const { showingMap } = this.props;
        if (showingMap) {
            return (
                <View style={{ flex: 4}}>
                    <View style={{ flex: 4, backgroundColor: '#333' }}>
                        <Map />
                    </View>
                    <ProviderFilterPicker />
                </View>
            )
        }
        return (
            <View style={{ flex: 4}}>
                <Info />
            </View>
        )
    }

    render() {
        return (
            <View style={[rootStyles.container, { alignItems: 'stretch' }]}>
                {this.renderMapOrInfo()}
                <View style={{ flex: 2 }}>
                    <ButtonField />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        showingMap: state.showingMap,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            requestLocation: requestLocation,
            getPlatform: getPlatform,
            getConnectionInfo: getConnectionInfo
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
