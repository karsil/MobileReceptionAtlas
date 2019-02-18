const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        connectionData: [ConnectionInformation]
        connectionDataByRadius(currentLocation: LocationInput!, radius: Int!): [ConnectionInformation]
        connectionDataByProvider(provider: String): [ConnectionInformation]
    }

    enum Platform {
        android
        ios
    }

    type ConnectionInformation {
        id: String
        platform: Platform
        connectionType: String
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
        createConnectionData(location: LocationInput!, signal: Float!, provider: String!, platform: Platform!, connectionType: String!): ConnectionInformation
    }
`);

module.exports = schema;
