const mongoose = require('mongoose');
const { waypointSchema } = require('../waypoint/waypointSchema');

const tripSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, default: '' },
  start: waypointSchema,
  end: waypointSchema,
  waypoints: [waypointSchema],
  next: { type: Number, default: 1 },
});

module.exports = {
  tripSchema,
  Trip: mongoose.model('Trip', tripSchema),
};
