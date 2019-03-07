import React from 'react';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { styles } from './TitleBar.Styles';

import Button from '../ButtonField/Button';

import {
    createConnectionData,
    getAllConnectionDataAction,
    getConnectionDataByRadiusAction,
    showMap,
} from '../ButtonField/ButtonField.Action';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { filterMapByProvider } from '../ProviderFilterPicker/ProviderFilterPicker.Action'

class TitleBar extends React.Component {

    providers = [
        'Unfiltered',
        'Telekom',
        'Vodafone',
        'o2',
        'e-plus'
    ]

    filterSelected = (provider) => {
        if (provider !== this.providers[0]){
            console.log("dispatching...")
            this.props.filterMapByProvider(provider)
        }
    }

    renderTitle = () => {
        const { showingMap } = this.props;
        if (showingMap) {
            return (
                <View style={[styles.toolbarTitle, { alignItems: 'center' }]}>
                    <ModalDropdown
                        defaultValue={'Select filter...'}
                        options={this.providers}
                        onSelect={(idx, value) => this.filterSelected(value)}
                    />
                </View>
            );
        }
        return (
            <Text style={styles.toolbarTitle}>
                Your Current Device Information
            </Text>
        );
    };

    render() {
        const { showingMap } = this.props;
        return (
            <View style={styles.toolbar}>
                <Button
                    onPress={() => this.props.showMap(!showingMap)}
                    disabled={!showingMap}
                    style={styles.toolbarButton}
                    textStyle={styles.toolbarButtonText}
                    title={showingMap ? 'Back' : ''}
                />
                {this.renderTitle()}
                <Button
                    onPress={() => this.props.showMap(!showingMap)}
                    disabled={showingMap}
                    style={styles.toolbarButton}
                    textStyle={styles.toolbarButtonText}
                    title={showingMap ? '' : 'Show Map'}
                />
            </View>
        );
    }
}

function mapStateToProps({ currentInformation, showingMap }) {
    return {
        showingMap,
        currentInformation,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getConnectionInfo: getAllConnectionDataAction,
            getConnectionInfoByRadius: getConnectionDataByRadiusAction,
            storeConnectionInfo: createConnectionData,
            showMap: showMap,
            filterMapByProvider: filterMapByProvider
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleBar);
