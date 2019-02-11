const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        connectionData: [ConnectionInformation]
        connectionDataByProvider(provider: String): [ConnectionInformation]
    }

    type ConnectionInformation {
        id: String
        location: Location
        signal: Float
        provider: String
    }

    type Location {
        x: Float
        y: Float
    }

    input LocationInput {
        x: Float!
        y: Float!
    }

    type Mutation {
        createConnectionData(location: LocationInput!, signal: Float!, provider: String!): ConnectionInformation
    }
`);

module.exports = schema;
