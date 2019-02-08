import React from 'react';
import { View } from 'react-native';

import Info from './../InfoField/InfoField';
import ButtonField from './../ButtonField/ButtonField';
import { rootStyles } from './Root.Styles';

export default class Root extends React.Component {
    render() {
        return (
            <View style={rootStyles.container}>
                <Info />
                <ButtonField />
            </View>
        );
    }
}
