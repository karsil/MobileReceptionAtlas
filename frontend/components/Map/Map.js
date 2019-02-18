import React from 'react';
import { Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { connect } from 'react-redux';

import { MapStyles } from './Map.Styles';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            marker: [],
        };
    }

    updateMapMarkerFromLocations = (d) => {
        let data = d || [];
      
        const dataMarker = data.map((information) => {
            if (information.location) {
                return (
                    <Marker
                        key={information.id}
                        title={`Information`}
                        pinColor={getPinColorBySignal(information.signal)}
                        coordinate={{
                            latitude: information.location.x,
                            longitude: information.location.y,
                        }}
                    >
                        <Callout>
                            <Text style={MapStyles.title}>Information</Text>
                            <Text>Signal: {information.signal}</Text>
                            <Text>Provider: {information.provider}</Text>
                        </Callout>
                    </Marker>
                );
            }
        });
        // add users position to list
        dataMarker.push(
            <Marker
                title="your position"
                key="own-data-marker"
                pinColor="#4569ab"
                coordinate={{
                    latitude: this.props.location.x,
                    longitude: this.props.location.y,
                }}
            />
        );

        this.setState({ marker: dataMarker });
    };

    componentDidMount() {
        this.updateMapMarkerFromLocations(this.props.data);
    }

    componentWillReceiveProps(props) {
        this.updateMapMarkerFromLocations(props.data);
    }

    render() {
        return (
            <MapView
                style={MapStyles.container}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: this.props.location.x,
                    longitude: this.props.location.y,
                    latitudeDelta: 2,
                    longitudeDelta: 1,
                }}
            >
                {this.state.marker}
            </MapView>
        );
    }
}

function getPinColorBySignal(signal) {
    if (signal < 20) {
        return '#CC0000';
    } else if (signal < 50) {
        return '#FFA500';
    } else if (signal < 90) {
        return '#66b266';
    }

    return '#00B200';
}

function mapStateToProps(state) {
    return {
        data: state.data,
        location: state.currentInformation.location,
    };
}

export default connect(mapStateToProps)(Map);
