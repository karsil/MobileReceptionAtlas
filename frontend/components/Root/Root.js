import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Info from './../InfoField/InfoField';
import Map from './../Map/Map';
import ButtonField from './../ButtonField/ButtonField';
import { rootStyles } from './Root.Styles';
import { requestLocation, getPlatform } from './Root.Action';

class Root extends React.Component {
    constructor(props) {
        super(props);
        props.requestLocation();
        props.getPlatform();
    }

    render() {
        const { showingMap } = this.props;
        return (
            <View style={[rootStyles.container, { alignItems: 'stretch' }]}>
                <View style={{ flex: 4, backgroundColor: '#333' }}>
                    {showingMap ? <Map /> : <Info />}
                </View>
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
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
