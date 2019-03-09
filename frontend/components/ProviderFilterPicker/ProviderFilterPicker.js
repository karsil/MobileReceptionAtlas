import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { providerFilterStyles } from './ProviderFilterPicker.Styles';
import { filterMapByProvider } from './ProviderFilterPicker.Action';

import { getAllConnectionDataAction } from '../ButtonField/ButtonField.Action'

import ModalDropdown from 'react-native-modal-dropdown';

export const NO_FILTER = 'no-filter';

class ProviderFilterPicker extends React.Component {

    providers = [
        "- All -",
        'Telekom',
        'Vodafone',
        'O2',
        'E-Plus'
    ]

    filterSelected = (provider) => {
        if (provider !== this.providers[0]){
            this.props.filterMapByProvider(provider)
        }
        else {
            this.props.getAllConnectionDataAction()
        }
    }

    render() {
        return (
            <View style={providerFilterStyles.container}>
                <Text>Provider: </Text>
                <ModalDropdown
                        defaultValue={this.providers[0]}
                        style={providerFilterStyles.pickerSelect}
                        textStyle={providerFilterStyles.picker}
                        dropdownTextStyle={providerFilterStyles.text}
                        dropdownTextHighlightStyle={[providerFilterStyles.text, {fontWeight: "bold"}]}
                        options={this.providers}
                        onSelect={(idx, value) => this.filterSelected(value)}
                    />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterProvider: state.filterByProvider,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            filterMapByProvider: filterMapByProvider,
            getAllConnectionDataAction: getAllConnectionDataAction
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProviderFilterPicker);
