import React from 'react';
import { View, Button } from 'react-native';
import { buttonStyles } from './ButtonField.Styles';

export default class ButtonField extends React.Component {
    render() {
      return (
        <View style={buttonStyles.container}>
            <Button
              style={buttonStyles.button}
              onPress={() => alert('Dummy: Send own data')}
              title="Send own data"
            />
            <Button
              style={buttonStyles.button}
              onPress={() => alert('Dummy View map')}
              title="View map"
            />
        </View>
      );
    }
  }

