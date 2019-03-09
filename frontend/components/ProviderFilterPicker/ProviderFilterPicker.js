import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { providerFilterStyles } from './ProviderFilterPicker.Styles';
import { updateProviderFilter } from './ProviderFilterPicker.Action';

import { getConnectionDataAction } from '../ButtonField/ButtonField.Action';

import ModalDropdown from 'react-native-modal-dropdown';

export const NO_FILTER = 'no-filter';

class ProviderFilterPicker extends React.Component {
    providers = ['- All -', 'Telekom', 'Vodafone', 'O2', 'E-Plus'];

    filterSelected = (provider) => {
        this.props.updateProviderFilter(provider);
        this.props.getConnectionDataAction(this.props.searchRadius);
    };

    render() {
        return (
            <View style={providerFilterStyles.container}>
                <Text>Provider: </Text>
                <ModalDropdown
                    defaultValue={this.providers[0]}
                    style={providerFilterStyles.pickerSelect}
                    textStyle={providerFilterStyles.picker}
                    dropdownTextStyle={providerFilterStyles.text}
                    dropdownTextHighlightStyle={[
                        providerFilterStyles.text,
                        { fontWeight: 'bold' },
                    ]}
                    options={this.providers}
                    onSelect={(idx, value) => this.filterSelected(value)}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterProvider: state.filter.provider,
        searchRadius: state.searchRadius,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updateProviderFilter: updateProviderFilter,
            getConnectionData: getConnectionDataAction,
            getConnectionDataAction,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProviderFilterPicker);
