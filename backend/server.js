/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db'); // import triggers db connection
const tripController = require('./models/trip/tripController');
const mapsController = require('./models/google/mapsController');

const { PORT } = process.env;
const distFolder = path.resolve(__dirname, '../client/dist/');
const indexHTML = path.resolve(__dirname, '../client/dist/index.html');
const app = express();


/* SERVER GLOBALS */
app.use('/', express.static(distFolder));
app.use(bodyParser.json());


/*  HOME ROUTES */
// app.get('/', (req, res) => res.send('hello blueyellowred!'));
app.get('/',
  (req, res) => res.sendFile(indexHTML));

app.post('/',
  tripController.createTrip,
  // (req, res) => res.json(res.locals.trip));
  (req, res) => res.status(200).redirect(`/trip/${res.locals.trip._id}`));


/* TRIP ROUTES */
// gets a trip by id in URL
app.get('/trip/:tripId',
  tripController.findTripById,
  (req, res) => res.json(res.locals.trip));

// add a waypoint to a trip
app.post('/trip/:tripId/addWaypoint',
  tripController.findTripById,
  tripController.addWaypoint,
  (req, res) => res.json(res.locals.trip));


/* SEARCH BAR & MAPS API ROUTES */
app.post('/maps',
  mapsController.find,
  (req, res) => res.json(res.locals.maps));


/* TEST ROUTES */
app.get('/test',
  tripController.findAllTrips,
  (req, res) => res.json(res.locals.trips));

app.post('/test',
  tripController.createTrip,
  (req, res) => res.json(res.locals.trip));


/* 404: FILE NOT FOUND */
app.use((req, res) => res.status(404).send('sorry, we couldn\'t find that page...'));


/* ERROR HANDLER */
app.use((err, req, res, next) => {
  // database errors
  if (err.db) {
    console.error('database error:', err.db);
    return res.status(500).send(err.message);
  }

  // default response
  return res.status(500).send('sorry, something broke...');
});


app.listen(PORT, () => console.log(`\n📡  server listening on port ${PORT}...`));
