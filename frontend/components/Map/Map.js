import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { connect } from 'react-redux';

import { MapStyles } from './Map.Styles';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: props.location.latitude,
                longitude: props.location.longitude,
                latitudeDelta: 2,
                longitudeDelta: 1,
            },
            marker: [],
            currentPositionMarker: null,
        };
    }

    updateMapMarkerFromLocations = (d) => {
        let data = d || [];

        const dataMarker = data.map((information) => {
            if (information.location) {
                return getCircleByConnectionType(information);
            }
        });

        // add users position to list
        if (this.currentPositionHasChanged()) {
            const position = (
                <Marker
                    title="your position"
                    key="own-data-marker"
                    coordinate={this.props.location}
                />
            );
            this.setState({ currentPositionMarker: position });
        }
        this.setState({ marker: dataMarker });
    };

    currentPositionHasChanged = () => {
        const currentPosition = this.props.location;
        const previousPosition = this.state.currentPositionMarker;

        // if there is no position in state, the current position has changed
        if (previousPosition === null) {
            return true;
        }

        return (
            currentPosition.latitude !== previousPosition.latitude ||
            currentPosition.longitude !== previousPosition.longitude
        );
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
                initialRegion={this.state.region}
            >
                {this.state.marker}
                {this.state.currentPositionMarker}
            </MapView>
        );
    }
}

function getCircleByConnectionType(information) {
    const { id, location, connectionType } = information;
    return (
        <Circle
            key={id}
            center={location}
            radius={5000}
            fillColor={getColorByConnectionType(connectionType)}
            strokeWidth={0}
            lineJoin={'round'}
        />
    );
}

function getColorByConnectionType(connectionType) {
    let color = {
        r: 69,
        g: 139,
        b: 0,
        a: 0.5,
    };

    if (connectionType === '2G') {
        color.r = 127;
        color.g = 255;
        color.b = 0;
        color.a = 0.3;
    } else if (connectionType === '3G') {
        color.r = 118;
        color.g = 238;
        color.b = 0;
        color.a = 0.35;
    } else if (connectionType === '4G') {
        color.r = 102;
        color.g = 205;
        color.b = 0;
        color.a = 0.4;
    }

    return `rgba(${color.r},${color.g},${color.b},${color.a})`;
}

function mapStateToProps(state) {
    return {
        data: state.data,
        location: state.currentInformation.location,
    };
}

export default connect(mapStateToProps)(Map);
