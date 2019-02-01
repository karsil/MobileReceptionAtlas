const express = require('express');
const expressGraphql = require('express-graphql');
const { buildSchema } = require('graphql');

const getConnectionByProvider = require('./graphql/databaseQuery');

const logger = require('./logging');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/database").catch(err => {
    if (err) {
        logger.error(`Database error: ${err}`);
    }
});

const ConnectionData = require('./model/data');

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


const rootQuery = {
    connectionData: () => ConnectionData.find(),
    connectionDataByProvider: getConnectionByProvider,
}


require('./mock').mockData();

const app = express();
app.use('/graphql', expressGraphql({
    schema: schema,
    rootValue: rootQuery,
    graphiql: true,
}));

const port = 5000;
app.listen(port, () => {
    logger.info(`express graphql server is running on localhost:${port}/graphql`)
})