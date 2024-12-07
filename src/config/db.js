require('dotenv').config();

const mysql = require('mysql2');

const dbPool = mysql.createPool({
    socketPath: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const promisePool = dbPool.promise();

module.exports = promisePool;
