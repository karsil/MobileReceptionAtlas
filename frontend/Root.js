import React from 'react';
import { View, Button } from 'react-native';

import Info from './components/Info'
import ButtonField from './components/ButtonField'
import { Styles } from './styles'

export default class Root extends React.Component {
  render() {
    return (
        <View style={Styles.container}>
          <Info></Info>
          <ButtonField></ButtonField>
        </View>
    );
  }
}

