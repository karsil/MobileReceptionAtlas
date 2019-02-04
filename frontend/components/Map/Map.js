import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { View } from 'react-native'
import { connect } from 'react-redux'

import { MapStyles } from './Map.Styles';
import { points } from './getExampleData'

class Map extends React.Component {

    renderMap(){
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={MapStyles.map}
                initialRegion={{
                    latitude: 6.82646681,
                    longitude: 79.87121907,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.0121
                }}
            >
                {this.renderMarker(points)}
            </MapView>
        )
    }

    renderMarker(marker) {
        return marker.map(point => {
            if (point.latitude && point.longitude) {
                return (
                  <Marker
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
            <View style ={MapStyles.container}>
                {this.renderMap()}
            </View>
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

