const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trip', tripSchema);
