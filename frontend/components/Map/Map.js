import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View } from 'react-native'
import { connect } from 'react-redux'

import { MapStyles } from './Map.Styles';
import { points } from './getExampleData'

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
                    latitude: 6.82646681,
                    longitude: 79.87121907,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.0121
                }}
            >
                {this.renderMarkers(points)}
            </MapView>
        );
    }
}

function mapStateToProps(state) {
  return {
      locationX: state.locationX,
      locationY: state.locationY,
      signal: state.signal,
      provider: state.provider
  };
}


export default connect(
  mapStateToProps,
) (Map);

