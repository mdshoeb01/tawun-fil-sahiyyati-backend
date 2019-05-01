const router = require('express').Router();
const {
  getClinicList,
  addClinic,
} = require('../controller/main');

router.post('/add', async (req, res, next) => {
  let data;
  try {
    data = await addClinic(req.body, process.pool);
  } catch (err) {
    next(err);
    throw err;
  }
  res.json(data);
});

router.get('/list', async (req, res, next) => {
  let data;
  try {
    data = await getClinicList (process.pool);
  } catch (err) {
    next(err);
    throw err;
  }
  res.json(data);
});

module.exports = {
  clinicRouter: router,
};
