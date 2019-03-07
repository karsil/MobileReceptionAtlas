import gql from 'graphql-tag';

export const createNewConnectionData = gql`
    mutation createConnectionData(
        $location: LocationInput!
        $provider: String!
        $platform: Platform!
        $connectionType: String!
    ) {
        createConnectionData(
            location: $location
            provider: $provider
            platform: $platform
            connectionType: $connectionType
        ) {
            id
            location {
                latitude
                longitude
            }
            provider
            platform
            connectionType
        }
    }
`;
