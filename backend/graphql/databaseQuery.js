const ConnectionData = require('../model/data');
const uuid = require('uuid/v4');
const logger = require('./../logging');

async function getConnectionData({ provider, location, radius }) {
    const Provider = ['telekom', 'vodafone', 'o2', 'e-plus'];
    let filter = Provider.filter((elem) => elem === provider.toLowerCase());
    let filterByProvider = [];
    let databaseQuery = {};

    if (filter.length === 0) {
        filterByProvider = Provider;
    } else {
        filterByProvider.push(filter);
    }

    databaseQuery = {
        provider: { $in: filterByProvider },
    };

    if (radius !== 0) {
        databaseQuery = {
            ...databaseQuery,
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [location.latitude, location.longitude],
                    },
                    $maxDistance: radius,
                },
            },
        };
    }

    return new Promise((resolve, reject) => {
        ConnectionData.find(databaseQuery).then((res, err) => {
            if (err) {
                reject(err);
            }

            if (res) {
                resolve(res);
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
    createConnectionData,
    getConnectionData,
};
