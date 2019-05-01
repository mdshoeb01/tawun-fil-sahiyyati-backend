const logger = require('./logger');

const urlLogger = ('/', (req, res, next) => {
  logger.log(req.url);
  next();
});

const notFoundLogger = ('/', (req, res, next) => {
  logger.notFound();
  next();
});

const portLogger = (port) => {
  logger.port(port);
};

const errorLogger = (error, req, res, next) => {
  logger.error(error);
  next();
};

module.exports = {
  urlLogger,
  notFoundLogger,
  portLogger,
  errorLogger,
};
