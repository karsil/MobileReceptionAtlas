import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
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

        const dataMarker = data.map((information, index) => {
            if (information.location) {
                return (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: information.location.x,
                            longitude: information.location.y,
                        }}
                    />
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
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.0121,
                }}
            >
                {this.state.marker}
            </MapView>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        location: state.currentInformation.location,
    };
}

export default connect(mapStateToProps)(Map);
