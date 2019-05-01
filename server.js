const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { router } = require('./routes');
const { portLogger } = require('./common/logger-middleware');
const pool = require('./config/pool');

process.pool = pool;
const port = process.env.PORT || 4020;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
app.listen(port, portLogger(port));
