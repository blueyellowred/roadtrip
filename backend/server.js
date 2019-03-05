require('dotenv').config();
const express = require('express');
const db = require('./models/db'); // import triggers db connection
const tripController = require('./models/trip/tripController');

const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => res.send('hello blueyellowred!'));

app.get('/test', tripController.findAllTrips, (req, res) => res.send('test'));

app.post('/test', tripController.createTrip, (req, res) => res.redirect('/test'));


app.use((req, res) => res.status(400).send('sorry, we couldn\'t find that page...'));

app.use((err, req, res, next) => {
  // database errors
  if (err.db) {
    console.error('database error:', err.db);
    return res.status(500).send(err.message);
  }

  return res.status(500).send('sorry, something broke...');
});

app.listen(port, () => console.log(`\n📡  server listening on port ${port}...`));
