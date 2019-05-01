const router = require('express').Router();
const {
    addExpense,
    listExpensesByYearAndMonth,
} = require('../controller/main');

router.post('/add-expense', async (req, res, next) => {
    let data;
    try {
        data = await addExpense(req.body, process.pool);
    } catch (err) {
        throw err;
        next(err);
    }
    res.json(data)
});

router.get('/list/:year/:month', async (req, res, next) => {
    let data;
    try {
        data = await listExpensesByYearAndMonth(+req.params.year, +req.params.month, process.pool);
    } catch (err) {
        throw err;
        next(err);
    }
    res.json(data);
});

module.exports = {
    amountRouter: router,
};
