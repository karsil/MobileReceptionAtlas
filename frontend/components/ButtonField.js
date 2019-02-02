import React from 'react';
import { View, Button } from 'react-native';
import { Styles } from '../styles'

export default class ButtonField extends React.Component {
    render() {
      return (
        <View style={Styles.container}>
            <Button
            onPress={() => alert('Dummy: Send own data')}
            title="Send own data"
            />
            <Button
            onPress={() => alert('Dummy View map')}
            title="View map"
            />
        </View>
      );
    }
  }

