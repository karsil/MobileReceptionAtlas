const ConnectionData = require('./../model/data');
const uuid = require('uuid/v4');
const logger = require('./../logging');

const mockData = () => {
    ConnectionData.deleteMany((err) => {
        if (err) {
            logger.error('Error while deleting', err);
            return;
        }
        logger.info('Database content removed for initialization...');
    });

    const data = [];
    for (let i = 0; i < 30; i++) {
        let generatedData = generateRandomData();
        data.push(generatedData);
    }

    ConnectionData.insertMany(data).then((data, err) => {
        if (err) {
            logger.error(err);
            return;
        } else {
            logger.info('Data successfully mocked');
        }
    });
};

/**
 * Schleswig Holstein grobe Koordinaten für Random Kooridnation Gernator.
 * links oben 54.818936, 8.753612
 * rechts unten 53.901706, 10.851482
 * Differenz Latitude: 0.91723
 * Differenz Longitude: 2.0979
 */
function generateRandomData() {
    const platforms = ['android', 'ios'];
    const connectionTypes = ['2G', '3G', '4G'];
    const provider = ['Telekom', 'Vodafone', 'O2'];
    const signal = randomFloatGenerator(100);
    const location = {
        type: "Point",
        coordinates: [
            randomFloatGenerator(1, 53.901706),
            randomFloatGenerator(2.09, 8.753612)
        ]
    };
    return {
        id: uuid(),
        platform: platforms[randomIntegerGenerator(2)],
        connectionType: connectionTypes[randomIntegerGenerator(3)],
        provider: provider[randomIntegerGenerator(3)],
        signal,
        location,
    };
}

function randomFloatGenerator(max, offset = 0) {
    return Math.random() * max + offset;
}

function randomIntegerGenerator(max) {
    return Math.floor(Math.random() * max);
}

module.exports = { mockData, generateRandomData, randomIntegerGenerator };
