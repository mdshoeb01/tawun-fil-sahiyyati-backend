const mysql = require('mysql2/promise');

const config = require('./pool-config');

module.exports = mysql.createPool(config);
