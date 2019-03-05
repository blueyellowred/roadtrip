const Trip = require('./tripSchema');

const tripController = {};

tripController.test = (req, res, next) => {
  console.log('tripController test!');
  next();
};

tripController.createTrip = (req, res, next) => {
  console.log('creating trip...');
  Trip.create({})
    .then((data) => {
      console.log('saved to db as:', data);
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
      console.log('returned from db:', data, '\n');
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
