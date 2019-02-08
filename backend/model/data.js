const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    x: Number,
    y: Number,
});

const connectionDataSchema = new mongoose.Schema({
    id: String,
    location: locationSchema,
    signal: Number,
    provider: String,
});

module.exports = mongoose.model('ConnectionData', connectionDataSchema);
