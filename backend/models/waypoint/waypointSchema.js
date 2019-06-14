const mongoose = require('mongoose');

const waypointSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, default: '' },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  notes: { type: String, trim: true, default: '' },
  complete: { type: Boolean, default: false },
});

module.exports = {
  waypointSchema,
  Waypoint: mongoose.model('Waypoint', waypointSchema),
};
