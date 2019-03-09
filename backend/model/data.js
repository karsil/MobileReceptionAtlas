const mongoose = require('mongoose');

const connectionDataSchema = new mongoose.Schema({
    id: String,
    platform: String,
    connectionType: String,
    location: {
        type: { type: String, default: 'Point' },
        coordinates: {
            latitude: Number,
            longitude: Number,
        },
    },
    signal: Number,
    provider: String,
});

connectionDataSchema.index({
    location: '2dsphere',
});

module.exports = mongoose.model('ConnectionData', connectionDataSchema);
