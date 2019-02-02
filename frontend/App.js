import React from 'react';
import { View, Button } from 'react-native';
import Info from './components/Info'
import ButtonField from './components/ButtonField'
import { Styles } from './styles'

const dummy = {
  locationX: 10.42,
  locationY: 49.52,
  signal: 80,
  isp: 'Telekom'
}
export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Info data={dummy}></Info>
        <ButtonField></ButtonField>
      </View>
    );
  }
}


