const { buildSchema } = require("graphql");

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
`);

module.exports = schema;