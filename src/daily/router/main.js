const router = require('express').Router();
const {
    addDailyUpdate,
    listDailyUpdate,
} = require('../controller/main');

router.post('/add-update', async (req, res, next) => {
    let data;
    try {
        data = await addDailyUpdate(req.body, process.pool);
    } catch (err) {
        throw err;
        next(err);
    }
    res.json(data);
})

router.get('/list-update/:year/:month/:clinicId', async (req, res, next) => {
    let data;
    try {
        data = await listDailyUpdate(+req.params.year, +req.params.month, +req.params.clinicId, process.pool);
    } catch (err) {
        throw err;
        next(err);
    }
    res.json(data)
})

module.exports = {
    dailyRouter: router,
};