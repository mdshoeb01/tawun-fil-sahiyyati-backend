const router = require('express').Router();
const {
  urlLogger,
  notFoundLogger,
  errorLogger,
} = require('./common/logger-middleware');
const { clinicRouter } = require('./src/clinic/router/main');
const { dailyRouter } = require('./src/daily/router/main');
const { amountRouter } = require('./src/amount/router/main');
const { availableRouter } = require('./src/available/router/main')

router.use('/', urlLogger);
router.use('/clinic', clinicRouter);
router.use('/daily', dailyRouter);
router.use('/amount', amountRouter);
router.use('/available', availableRouter);

router.use(errorLogger);
router.use('*', notFoundLogger, (req, res) => {
  res.send('404 page, Not Found');
});

module.exports = {
  router,
};
