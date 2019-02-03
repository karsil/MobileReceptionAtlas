import React from 'react';
import { View, Button } from 'react-native';
import * as actionCreators from './actions'

import Info from './components/Info'
import ButtonField from './components/ButtonField'
import { Styles } from './styles'

class Root extends React.Component {
  render() {
    return (
        <View style={Styles.container}>
          <Info></Info>
          <ButtonField></ButtonField>
        </View>
    );
  }
}

