const mapsController = {};

mapsController.find = (req, res, next) => {
  console.log('contacting google...\n');
  res.locals.maps = {
    data: 'a bunch of stuff from google',
    originalRequest: req.body,
  };
  next();
};

module.exports = mapsController;
