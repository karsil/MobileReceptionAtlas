import gql from 'graphql-tag';

export const getAllConnectionData = gql`
    query {
        connectionData {
            id
            platform
            connectionType
            location {
                type
                coordinates
            }
            signal
            provider
        }
    }
`;

export const getConnectionDataByRadius = (userLocation, radius) => {
    return gql`
    query {
        connectionDataByRadius(
            currentLocation: {
                type: ${userLocation.type},
                coordinates: ${userLocation.coordinates}
            },
            radius: ${radius}
        ){
            id
            platform
            connectionType
            location {
                type
                coordinates
            }
            signal
            provider
        }
    }`;
};
