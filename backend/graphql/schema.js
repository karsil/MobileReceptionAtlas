const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        connectionData(provider: String!, location: LocationInput!, radius: Int!): [ConnectionInformation]
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
        provider: String
    }

    type Location {
        type: String!
        coordinates: Coordinates!
    }
    
    type Coordinates {
        latitude: Float!
        longitude: Float!
    }

    input LocationInput {
        latitude: Float!
        longitude: Float!
    }

    type Mutation {
        createConnectionData(location: LocationInput!, provider: String!, platform: Platform!, connectionType: String!): ConnectionInformation
    }
`);

module.exports = schema;
