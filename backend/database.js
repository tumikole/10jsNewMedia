const keys = require('./keys')
const { Pool } = require('pg');

const pool = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

const getClient = () => {
  return pool;
};

module.exports = {
  getClient,
};