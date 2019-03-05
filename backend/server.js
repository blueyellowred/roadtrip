require('dotenv').config();
const express = require('express');
const db = require('./models/db'); // import triggers db connection

const tripController = require('./models/trip/tripController');


const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => res.send('hello blueyellowred!'));

app.get('/test', tripController.test, (req, res) => res.send('test'));


app.listen(port, () => console.log(`\n📡  server listening on port ${port}...`));
