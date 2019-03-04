import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Picker, Button, ActivityIndicator } from 'react-native';
import { providerPickerStyles } from './ProviderPicker.Styles';

import { updateProvider } from './ProviderPicker.Action';

export const NO_PROVIDER = 'no-provider';

class ProviderPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: NO_PROVIDER,
        };
    }

    renderPicker = () => {
        return (
            <View style={providerPickerStyles.container}>
                <Text style={providerPickerStyles.headerText}>
                    Mobile Reception Atlas
                </Text>
                <Text style={providerPickerStyles.text}>
                    Please select your provider:
                </Text>
                <Picker
                    selectedValue={this.state.selectedOption}
                    style={providerPickerStyles.picker}
                    itemStyle={providerPickerStyles.pickerItem}
                    onValueChange={(value) =>
                        this.setState({ selectedOption: value })
                    }
                >
                    <Picker.Item
                        label="Select Your Provider"
                        value={NO_PROVIDER}
                    />
                    <Picker.Item label="Telekom" value="telekom" />
                    <Picker.Item label="Vodafone" value="vodafone" />
                    <Picker.Item label="O2" value="o2" />
                    <Picker.Item label="e-plus" value="e-plus" />
                    <Picker.Item label="other" value="other" />
                </Picker>
                <Button
                    onPress={() =>
                        this.props.setProvider(this.state.selectedOption)
                    }
                    title="Okay"
                    disabled={this.state.selectedOption === NO_PROVIDER}
                />
            </View>
        );
    };

    renderActivityIndicator = () => {
        return (
            <View style={providerPickerStyles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };

    render() {
        const { isFetchingDeviceGPS } = this.props;
        if (isFetchingDeviceGPS) {
            return this.renderActivityIndicator();
        }
        return this.renderPicker();
    }
}

function mapStateToProps({ isFetchingDeviceGPS, currentInformation }) {
    return {
        provider: currentInformation.provider,
        isFetchingDeviceGPS,
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
