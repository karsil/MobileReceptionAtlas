const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    type: { type: String, default: 'point' },
    coordinates: {
        latitude: Number,
        longitude: Number,
    },
});

const connectionDataSchema = new mongoose.Schema({
    id: String,
    platform: String,
    connectionType: String,
    location: locationSchema,
    signal: Number,
    provider: String,
});

locationSchema.index({
    location: '2dsphere',
});

module.exports = mongoose.model('ConnectionData', connectionDataSchema);
