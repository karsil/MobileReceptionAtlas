import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { connect } from 'react-redux';

import { MapStyles } from './Map.Styles';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            marker: [],
            currentPosition: null,
        };
    }

    updateMapMarkerFromLocations = (d) => {
        let data = d || [];

        const dataMarker = data.map((information) => {
            if (information.location) {
                return getCircleBySignalStrength(information);
            }
        });

        // add users position to list
        if (this.currentPositionHasChanged()) {
            const position = (
                <Marker
                    title="your position"
                    key="own-data-marker"
                    coordinate={{
                        latitude: this.props.location.x,
                        longitude: this.props.location.y,
                    }}
                />
            );
            this.setState({ currentPosition: position });
        }
        this.setState({ marker: dataMarker });
    };

    currentPositionHasChanged = () => {
        const currentPosition = this.props.location;
        const previousPosition = this.state.currentPosition;

        // if there is no position in state, the current position has changed
        if (previousPosition === null) {
            return true;
        }

        if (
            currentPosition.x !== previousPosition.x ||
            currentPosition.y !== previousPosition.y
        ) {
            return true;
        }
        return false;
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
                {this.state.currentPosition}
            </MapView>
        );
    }
}
function getCircleBySignalStrength(information) {
    const { id, location, signal } = information;
    return (
        <Circle
            key={id}
            center={{ latitude: location.x, longitude: location.y }}
            radius={signal * 100}
            fillColor={getColorBySignal(signal)}
            strokeWidth={0}
            lineJoin={'round'}
        />
    );
}

function getColorBySignal(signal) {
    let color = {
        r: 69,
        g: 139,
        b: 0,
        a: 0.5,
    };

    if (signal < 20) {
        color.r = 127;
        color.g = 255;
        color.b = 0;
        color.a = 0.3;
    } else if (signal < 50) {
        color.r = 118;
        color.g = 238;
        color.b = 0;
        color.a = 0.35;
    } else if (signal < 90) {
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
