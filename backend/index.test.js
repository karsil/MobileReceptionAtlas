const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('./config');

before(function(done) {
    // start mongo connection for database testing
    mongoose.connect(`${config.database.url}/${config.database.name}`);
    mongoose.connection.on('error', () => {
        console.log('Cannot connect to database');
        process.exit(0);
    });
    mongoose.connection.once('open', () => {
        console.log(`Connection established on ${config.database.url}`);
        done();
    });
});

describe('Test the /graphql endpoint', () => {});

after(function(done) {
    // after testing clear
    mongoose.connection.dropDatabase(() => {
        console.log('database dropped...');
        done();
    });
});
