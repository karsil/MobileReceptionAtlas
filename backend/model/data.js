const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    type: String,
    coordinates: [Number]
});

const connectionDataSchema = new mongoose.Schema({
    id: String,
    platform: String,
    connectionType: String,
    location: locationSchema,
    signal: Number,
    provider: String,
});

module.exports = mongoose.model('ConnectionData', connectionDataSchema);
