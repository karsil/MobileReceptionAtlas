const ConnectionData = require('../model/data');
const uuid = require('uuid/v4');
const logger = require('./../logging');

async function getConnectionData() {
    return new Promise((resolve, reject) => {
        ConnectionData.find({}).then((res, err) => {
            if (err) {
                reject(err);
            }

            if (res) {
                resolve(res);
            }

            reject('Something went wrong');
        });
    });
}

async function getConnectionDataByProvider({ provider }) {
    return new Promise((resolve, reject) => {
        ConnectionData.find({})
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

/**
 *
 */
async function getConnectionDataByRadius({ currentLocation, radius }) {
    return new Promise((resolve, reject) => {
        ConnectionData.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [
                            currentLocation.latitude,
                            currentLocation.longitude,
                        ],
                    },
                    $maxDistance: radius,
                },
            },
        }).then((res, err) => {
            if (err) {
                reject(err);
            } else if (res) {
                resolve(res);
            } else {
                reject(new Error('Something went wrong...'));
            }
        });
    });
}

async function createConnectionData({
    location,
    signal,
    provider,
    platform,
    connectionType,
}) {
    return new Promise((resolve, reject) => {
        ConnectionData.create(
            {
                id: uuid(),
                signal: signal,
                location: { type: 'Point', coordinates: location },
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

module.exports = {
    getConnectionDataByRadius,
    getConnectionDataByProvider,
    createConnectionData,
    getConnectionData,
};
