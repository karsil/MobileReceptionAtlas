const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./graphql/schema');

const config = require('./config');

const {
    getConnectionByProvider,
    createConnectionData,
    getConnectionData,
} = require('./graphql/databaseQuery');

const logger = require('./logging');
const mongoose = require('mongoose');

mongoose.connect(config.database.url).catch((err) => {
    if (err) {
        logger.error(`Database error: ${err}`);
    }
});

const root = {
    connectionData: getConnectionData,
    connectionDataByProvider: getConnectionByProvider,
    createConnectionData: createConnectionData,
};

require('./mock').mockData();

const app = express();
app.use(
    config.server.graphqlEndpoint,
    expressGraphql({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

const port = config.server.port;

app.listen(port, () => {
    logger.info(
        `express graphql server is running on localhost:${port}${
            config.server.graphqlEndpoint
        }`
    );
});
