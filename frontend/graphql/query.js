import gql from 'graphql-tag';

export const getAllConnectionData = gql`
    query {
        connectionData {
            id
            platform
            connectionType
            location {
                x
                y
            }
            signal
            provider
        }
    }
`;

export const getConnectionDataByRadius = (currentLocation, radius) => {
    return gql`
    query {
        connectionDataByRadius(currentLocation: {x: ${currentLocation.x}, y: ${
        currentLocation.y
    }}, radius: ${radius}) {
            id
            platform
            connectionType
            location {
                x
                y
            }
            signal
            provider
        }
    }`;
};
