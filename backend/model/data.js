const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
});

const connectionDataSchema = new mongoose.Schema({
    id: String,
    platform: String,
    connectionType: String,
    location: locationSchema,
    provider: String,
});

module.exports = mongoose.model('ConnectionData', connectionDataSchema);
