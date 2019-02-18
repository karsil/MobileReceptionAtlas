const ConnectionData = require('./../model/data');
const uuid = require('uuid/v4');
const logger = require('./../logging');

module.exports.mockData = () => {
    ConnectionData.deleteMany((err) => {
        if (err) {
            logger.error('Error while deleting', err);
            return;
        }
        logger.info('Database content removed for initialization...');
    });

    const data = [
        {
            id: uuid(),
            platform: 'Android', // android or ios
            connectionType: '2G', // possible values are 2G, 3G, 4G
            location: { x: 54.3227, y: 10.136 },
            signal: 85.3,
            provider: 'Telekom',
        },
        {
            id: uuid(),
            platform: 'Android',
            connectionType: '2G',
            location: { x: 54.32606, y: 10.13556 },
            signal: 10.101,
            provider: 'Vodafone',
        },
        {
            id: uuid(),
            platform: 'IOs',
            connectionType: '4G',
            location: { x: 54.3204, y: 10.1415 },
            signal: 99.13,
            provider: 'O2',
        },
        {
            id: uuid(),
            platform: 'Android',
            connectionType: '3G',
            location: { x: 54.3196, y: 10.1378 },
            signal: 35.5,
            provider: 'Telekom',
        },
    ];

    ConnectionData.insertMany(data).then((data, err) => {
        if (err) {
            logger.error(err);
            return;
        } else {
            logger.info('Data successfully mocked');
        }
    });
};
