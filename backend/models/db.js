const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', () => console.log('📀  connected to database...'));

module.exports = db;
