import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { providerFilterStyles } from './ProviderFilterPicker.Styles';
import { filterMapByProvider } from './ProviderFilterPicker.Action';

import { getAllConnectionDataAction } from '../ButtonField/ButtonField.Action'

import ModalDropdown from 'react-native-modal-dropdown';

export const NO_FILTER = 'no-filter';

class ProviderFilterPicker extends React.Component {

    providers = [
        NO_FILTER,
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
                <ModalDropdown
                        defaultIndex={0}
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
