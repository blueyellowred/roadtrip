const { Trip } = require('./tripSchema');

const tripController = {};

tripController.findTripById = (req, res, next) => {
  console.log('find trip by id...', req.params.tripId);
  const { tripId } = req.params;

  Trip.findById(tripId)
    .then((data) => {
      // console.log('\nfound trip:\n', trip);
      res.locals.trip = data;
      next();
    })
    .catch((err) => {
      const error = {
        db: err,
        message: 'failed to find trip',
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


module.exports = tripController;
