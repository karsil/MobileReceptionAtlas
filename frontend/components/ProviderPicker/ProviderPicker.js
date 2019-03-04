import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Picker, ActivityIndicator } from 'react-native';
import { providerPickerStyles } from './ProviderPicker.Styles';

import { updateProvider } from './ProviderPicker.Action';

export const NO_PROVIDER = 'no-provider';

class ProviderPicker extends React.Component {

    renderPicker = () => {
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

    renderActivityIndicator = () => {
        return (
            <View style={providerPickerStyles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    render() {
        const { isFetchingDeviceGPS } = this.props
        if (isFetchingDeviceGPS){
            return this.renderActivityIndicator()
        }
        return this.renderPicker()
    }
}

function mapStateToProps(state) {
    return {
        provider: state.currentInformation.provider,
        isFetchingDeviceGPS: state.isFetchingDeviceGPS,
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
