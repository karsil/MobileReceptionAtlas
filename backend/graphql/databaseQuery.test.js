'use strict';
const chai = require('chai');
const { expect, assert } = chai;

const dbOperations = require('./databaseQuery');

const data = {
    platform: 'Android',
    connectionType: '3G',
    location: { x: 54.3196, y: 10.1378 },
    signal: 35.5,
    provider: 'Telekom',
};

describe('Mongodb Data Schema', () => {
    describe('Test Database', () => {
        it('Can store new entries', async () => {
            const result = await dbOperations.createConnectionData(data);
            assert.isObject(result, 'returns an object');
            expect(result).to.have.property('id');
            expect(result).to.have.property('signal');
            expect(result).to.have.property('location');
            expect(result).to.have.property('provider');
            expect(result).to.have.property('connectionType');
        });

        it('Can access the stored data', async () => {
            const result = await dbOperations.getConnectionData();
            assert.isArray(
                result,
                'The database operation returns the stored data as object'
            );
            expect(result[0]).to.have.property('id');
            expect(result[0]).to.have.property('signal');
            expect(result[0]).to.have.property('location');
            expect(result[0]).to.have.property('provider');
            expect(result[0]).to.have.property('connectionType');
        });

        it('Can select data by provider', async () => {
            dbOperations.createConnectionData({
                ...data,
                provider: 'Vodafone',
                id: 'test1',
            });
            const result = await dbOperations.getConnectionByProvider({
                provider: 'Telekom',
            });
            assert.lengthOf(result, 1, 'Return just the "Telekom" entries');
        });
    });
});
