const Trip = require('./tripSchema');

const tripController = {};

tripController.test = (req, res, next) => {
  console.log('tripController test!');
  next();
};


module.exports = tripController;
