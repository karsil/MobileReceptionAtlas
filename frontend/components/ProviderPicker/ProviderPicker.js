import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Picker } from 'react-native';
import { providerPickerStyles } from './ProviderPicker.Styles';

import { updateProvider } from './ProviderPicker.Action';

export const NO_PROVIDER = 'no-provider';

class ProviderPicker extends React.Component {
    render() {
        return (
            <View style={providerPickerStyles.container}>
                <Text style={providerPickerStyles.text}>Your provider:</Text>
                <Picker
                    // default case is 'Select Provider' item
                    selectedValue={this.props.provider || NO_PROVIDER}
                    style={providerPickerStyles.picker}
                    itemStyle={providerPickerStyles.pickerItem}
                    onValueChange={(value) => this.props.setProvider(value)}
                >
                    <Picker.Item
                        label="Select your provider"
                        value={NO_PROVIDER}
                    />
                    <Picker.Item label="Telekom" value="telekom" />
                    <Picker.Item label="Vodafone" value="vodafone" />
                    <Picker.Item label="O2" value="o2" />
                    <Picker.Item label="e-plus" value="e-plus" />
                    <Picker.Item label="other" value="other" />
                </Picker>
            </View>
        );
    }
}

function mapStateToProps({ currentInformation }) {
    return {
        provider: currentInformation.provider,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setProvider: updateProvider,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProviderPicker);
