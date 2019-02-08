module.exports = {
    database: {
        name: process.env.DATABASE_NAME || 'development',
        url: process.env.DATABASE_URL || 'mongodb://localhost:27017',
    },

    server: {
        port: process.env.SERVER_PORT || 5000,
        graphqlEndpoint: process.env.GRAPHQL_ENDPOINT || '/graphql',
    },
};
