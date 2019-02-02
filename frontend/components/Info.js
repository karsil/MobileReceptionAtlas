import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../styles'

export default class Info extends React.Component {
    render() {
      return (
        <View style={Styles.container}>
          <Text>GPS: X{this.props.data.locationX}/ Y{this.props.data.locationY}</Text>
          <Text>Signal: {this.props.data.signal}</Text>
          <Text>ISP: {this.props.data.isp}</Text>
        </View>
      );
    }
}
