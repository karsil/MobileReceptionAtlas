import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { connect } from 'react-redux'

import { MapStyles } from './Map.Styles';

class Map extends React.Component {
    renderMarkers(markers) {
        return markers.map((point, index) => {
            if (point.latitude && point.longitude) {
                return (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: point.latitude,
                      longitude: point.longitude
                    }}
                  />
                );
            }
        })
    }

    render() {
        return (
            <MapView
                style={MapStyles.container}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: this.props.locationX,
                    longitude: this.props.locationY,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.0121
                }}
            >
                {this.renderMarkers(this.props.data)}
            </MapView>
        );
    }
}

function mapStateToProps(state) {
  return {
      data: state.data,
      locationX: state.currentInformation.locationX,
      locationY: state.currentInformation.locationY,
      provider: state.currentInformation.provider
  };
}


export default connect(
  mapStateToProps,
) (Map);

