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

/**
 * the actual calculation just reduces the result to an square with radius on longitude and latitude axis.
 * To improve to filter per distance, you have to do some math here.
 * This solution should fit for now
 */
async function getConnectionDataByRadius({ currentLocation, radius }) {
    const R = 6378.137; // earth as reference
    const alpha = (180 * radius) / (R * Math.PI);

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
    provider,
    platform,
    connectionType,
}) {
    return new Promise((resolve, reject) => {
        ConnectionData.create(
            {
                id: uuid(),
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
