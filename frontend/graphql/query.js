import gql from 'graphql-tag';

export const getAllConnectionData = gql`
    query {
        connectionData {
            id
            platform
            connectionType
            location {
                latitude
                longitude
            }
            provider
        }
    }
`;

export const getConnectionDataByRadius = (currentLocation, radius) => {
    return gql`
    query {
        connectionDataByRadius(currentLocation: {latitude: ${
            currentLocation.latitude
        }, longitude: ${currentLocation.longitude}}, radius: ${radius}) {
            id
            platform
            connectionType
            location {
                latitude
                longitude
            }
            provider
        }
    }`;
};
