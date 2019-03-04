import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Picker, Text } from 'react-native';
import { providerFilterStyles } from './ProviderFilterPicker.Styles';

import { filterMapByProvider } from './ProviderFilterPicker.Action';

export const NO_FILTER = 'no-filter';

class ProviderFilterPicker extends React.Component {
    render() {
        return (
            <View style={providerFilterStyles.container}>
                <Text style={providerFilterStyles.text}>Filter by</Text>
                <Picker
                    // default case is 'Unfiltered' item
                    selectedValue={this.props.filterProvider || 'Unfiltered'}
                    style={providerFilterStyles.picker}
                    itemStyle={providerFilterStyles.text}
                    onValueChange={(value) => this.props.filterBy(value)}
                >
                    <Picker.Item label="None" value={NO_FILTER} />
                    <Picker.Item label="Telekom" value="telekom" />
                    <Picker.Item label="Vodafone" value="vodafone" />
                    <Picker.Item label="O2" value="o2" />
                    <Picker.Item label="e-plus" value="e-plus" />
                </Picker>
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
            filterBy: filterMapByProvider,
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProviderFilterPicker);
