import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Info from './../InfoField/InfoField';
import Map from './../Map/Map';
import ButtonField from './../ButtonField/ButtonField';
import { rootStyles } from './Root.Styles';

class Root extends React.Component {
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

export default connect(mapStateToProps)(Root);
