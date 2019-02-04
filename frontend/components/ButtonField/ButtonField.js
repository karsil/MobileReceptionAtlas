import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux'
import { buttonStyles } from './ButtonField.Styles';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions'
import { showMap } from '../../actions'

class ButtonField extends React.Component {
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
              onPress={() => this.props.showMap(true)}
              title="View map"
            />
        </View>
      );
    }
  }

  function mapStateToProps(state) {
    return {
        showMap: state.showMap
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            showMap: actionCreators.showMap
        },
        dispatch
    );
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (ButtonField);
  