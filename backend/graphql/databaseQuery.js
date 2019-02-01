const ConnectionData = require('../model/data')

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

module.exports = getConnectionByProvider;