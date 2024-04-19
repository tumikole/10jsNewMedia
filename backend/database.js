// database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mediaproduction',
  password: 'walalawasala',
  port: 5432,
});

const getClient = () => {
  return pool;
};

module.exports = {
  getClient,
};