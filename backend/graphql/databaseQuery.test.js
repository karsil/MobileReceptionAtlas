'use strict';
const chai = require('chai');
const { expect, assert } = chai;

const dbOperations = require('./databaseQuery');

const data = {
    platform: 'Android',
    connectionType: '3G',
    location: { latitude: 54.3196, longitude: 10.1378 },
    provider: 'telekom',
};

describe('Mongodb Data Schema', () => {
    describe('Test Database', () => {
        it('Can store new entries', async () => {
            const result = await dbOperations.createConnectionData(data);
            assert.isObject(result, 'returns an object');
            expect(result).to.have.property('id');
            expect(result).to.have.property('location');
            expect(result).to.have.property('provider');
            expect(result).to.have.property('connectionType');
        });

        it('Can access the stored data', async () => {
            const result = await dbOperations.getConnectionData({
                provider: 'no-filter',
                location: data.location,
                radius: 0,
            });
            assert.isArray(
                result,
                'The database operation returns the stored data as object'
            );
            expect(result[0]).to.have.property('id');
            expect(result[0]).to.have.property('location');
            expect(result[0]).to.have.property('provider');
            expect(result[0]).to.have.property('connectionType');
        });

        it('Can select data by provider', async () => {
            dbOperations.createConnectionData({
                ...data,
                provider: 'vodafone',
                id: 'test1',
            });
            const result = await dbOperations.getConnectionData({
                provider: 'telekom',
                location: data.location,
                radius: 0,
            });
            assert.lengthOf(result, 1, 'Return just the "Telekom" entries');
        });
    });
});
