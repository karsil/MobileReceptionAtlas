const ConnectionData = require('../model/data')
const uuid = require("uuid/v4");
const logger = require('./../logging');


async function getConnectionByProvider({ provider }) {
    let results = [];

    const query = new Promise((resolve, reject) => {
        ConnectionData.find().where({ provider: provider }).then((res, err) => {
            if (err) {
                reject(err);
            }

            if (res) {
                resolve(res)
            }
        });
    });

    return query.then((entry) => {
        entry.forEach((result) => {
            results.push(result);
        });
        return results;
    });
}

async function createConnectionData({ location, signal, provider }) {
    const query = new Promise( (resolve, reject) => {

        ConnectionData.create({
            id: uuid(),
            signal: signal,
            location: location,
            provider: provider,
        }, (err, result) => {
            if (err) {
                reject(err);
            }
            if (result) {
                logger.info('Data successfully stored')
                resolve(result);
            }
        });
    });

    return query.then( (result) => result)
                .catch( (error) => logger.error(error))
}

module.exports = { getConnectionByProvider, createConnectionData };