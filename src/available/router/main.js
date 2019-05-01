const router = require('express').Router();

const { getAvailable } =require('../controller/main');

router.get('/', async (req, res, next) => {
    let data;
    try {
        data = await getAvailable(process.pool);
    } catch (err) {
        next(err)
        throw err;
    }
    res.json(data);
})

module.exports = {
    availableRouter: router,
};

