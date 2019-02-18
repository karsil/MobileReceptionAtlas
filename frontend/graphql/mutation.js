import gql from 'graphql-tag';

export const createNewConnectionData = gql`
    mutation createConnectionData(
        $location: LocationInput!
        $signal: Float!
        $provider: String!
        $platform: Platform!
        $connectionType: String!
    ) {
        createConnectionData(
            location: $location
            signal: $signal
            provider: $provider
            platform: $platform
            connectionType: $connectionType
        ) {
            location {
                x
                y
            }
            signal
            provider
            platform
            connectionType
        }
    }
`;
