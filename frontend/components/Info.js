import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../styles'
import { bindActionCreators } from 'redux'
import * as actionCreators from './../actions'
import { connect } from 'react-redux'

class Info extends React.Component {
    render() {
      return (
        <View style={Styles.container}>
          <Text>GPS: X{this.props.locationX}/ Y{this.props.locationY}</Text>
          <Text>Signal: {this.props.signal}</Text>
          <Text>ISP: {this.props.isp}</Text>
        </View>
      );
    }
}

function mapStateToProps(state) {
  return {
      locationX: state.locationX,
      locationY: state.locationY,
      signal: state.signal,
      isp: state.isp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      {
          updateGPS: actionCreators.updateGPS,
      },
      dispatch
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Info);

