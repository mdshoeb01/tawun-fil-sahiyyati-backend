const { createLogger, transports, format } = require('winston');

const { combine, timestamp, printf } = format;


const myFormat = printf(info => `${info.timestamp} ${info.level}: ${info.message}`);

module.exports = createLogger({
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [new transports.Console(),
    // new transports.File({ filename: 'coverage.log' }),
  ],
});
