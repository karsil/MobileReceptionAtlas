import gql from 'graphql-tag';

export const getAllConnectionData = gql`
    query {
        connectionData {
            id
            location {
                x
                y
            }
            signal
            provider
        }
    }
`;
