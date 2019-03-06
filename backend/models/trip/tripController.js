const { Trip } = require('./tripSchema');

const tripController = {};

tripController.test = (req, res, next) => {
  console.log('tripController test!');
  next();
};

tripController.createTrip = (req, res, next) => {
  console.log('\ncreating trip...');
  const { title, start, end } = req.body;
  Trip.create({ title, start, end })
    .then((data) => {
      res.locals.trip = data;
      // console.log('\nsaved to db as:', data);
      next();
    })
    .catch((err) => {
      const error = {
        db: err,
        message: 'failed to create trip',
      };
      next(error);
    });
};

tripController.findAllTrips = (req, res, next) => {
  console.log('getting all trips...\n');
  Trip.find({})
    .then((data) => {
      // console.log('returned from db:', data, '\n');
      res.locals.trips = data;
      next();
    })
    .catch((err) => {
      const error = {
        db: err,
        message: 'failed to find trips',
      };
      next(error);
    });
};


module.exports = tripController;
