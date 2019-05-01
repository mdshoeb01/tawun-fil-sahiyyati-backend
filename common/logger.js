const logger = require('../models/winston-model');

function notFound() {
  logger.log({
    level: 'info',
    message: '404, not found',
  });
}

function port(number) {
  logger.log({
    level: 'info',
    message: `Running on port: ${number}`,
  });
}
function log(url) {
  logger.log({
    level: 'info',
    message: `${url} page is requested`,
  });
}

function error(err) {
  logger.log({
    level: 'error',
    message: `${err.message}`,
  });
}

module.exports = {
  log,
  port,
  error,
  notFound,
};
