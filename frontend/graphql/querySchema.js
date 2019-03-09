import gql from 'graphql-tag';

export default (provider, location, radius) => {
    return gql`
    query {
        connectionData (
            provider: "${provider}",
            location: {
                latitude: ${location.latitude}, 
                longitude: ${location.longitude}
            }, 
            radius: ${radius}
        ) {
            id
            platform
            connectionType
            location {
                type
                coordinates {
                    latitude
                    longitude
                }
            }
            provider
        }
    }`;
};
