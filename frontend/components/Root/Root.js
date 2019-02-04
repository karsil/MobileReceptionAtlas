import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import Info from './../InfoField/InfoField'
import ButtonField from './../ButtonField/ButtonField'
import { rootStyles } from './Root.Styles';

class Root extends React.Component {
  render() {
    const { showMap } = this.props
    if(showMap){
      return (
        <View style={rootStyles.container}>
          <Info></Info>
          <Text>Map</Text>
        </View>
      );
    }
    return (
        <View style={rootStyles.container}>
          <Info></Info>
          <ButtonField></ButtonField>
        </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      showMap: state.showMap
  };
}

export default connect(
  mapStateToProps
) (Root);
