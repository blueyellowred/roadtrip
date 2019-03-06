require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db'); // import triggers db connection
const tripController = require('./models/trip/tripController');

const { PORT } = process.env;
const app = express();


// *** SERVER GLOBALS *** //
app.use(bodyParser.json());

// *** HOME ROUTES *** //
app.get('/', (req, res) => res.send('hello blueyellowred!'));


// *** TEST ROUTES *** //
app.get('/test', tripController.findAllTrips, (req, res) => res.json(res.locals.trips));

app.post('/test', tripController.createTrip, (req, res) => res.json(res.locals.trip));


// *** 404: FILE NOT FOUND *** //
app.use((req, res) => res.status(404).send('sorry, we couldn\'t find that page...'));

// *** ERROR HANDLER *** //
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
