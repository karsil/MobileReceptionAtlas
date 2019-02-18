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
