const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./graphql/schema');

const { getConnectionByProvider, createConnectionData } = require('./graphql/databaseQuery');

const logger = require('./logging');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/database").catch(err => {
    if (err) {
        logger.error(`Database error: ${err}`);
    }
});

const ConnectionData = require('./model/data');

const root = {
    connectionData: () => ConnectionData.find(),
    connectionDataByProvider: getConnectionByProvider,
    createConnectionData: createConnectionData,
}


require('./mock').mockData();

const app = express();
app.use('/graphql', expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const port = 5000;
app.listen(port, () => {
    logger.info(`express graphql server is running on localhost:${port}/graphql`)
})