import gql from 'graphql-tag';

export const getAllConnectionData = gql`
    query {
        connectionData {
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

export const connectionDataByProvider = (provider) => {
    return gql`
    query {
        connectionDataByProvider(provider: "${provider}") {
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
