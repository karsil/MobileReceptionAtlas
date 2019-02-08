const ConnectionData = require('../model/data');
const uuid = require('uuid/v4');
const logger = require('./../logging');

async function getConnectionByProvider({ provider }) {
    return new Promise((resolve, reject) => {
        ConnectionData.find()
            .where({ provider: provider })
            .then((res, err) => {
                if (err) {
                    reject(err);
                }

                if (res) {
                    resolve(res);
                }
            });
    });

}

async function createConnectionData({ location, signal, provider, platform, connectionType}) {
    return new Promise((resolve, reject) => {
        ConnectionData.create(
            {
                id: uuid(),
                signal: signal,
                location: location,
                provider: provider,
                platform: platform,
                connectionType: connectionType,

            },
            (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result) {
                    logger.info('Data successfully stored');
                    resolve(result);
                }
            }
        );
    });
}

module.exports = { getConnectionByProvider, createConnectionData };
