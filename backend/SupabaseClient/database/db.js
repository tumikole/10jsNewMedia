// database.js
const { Pool } = require("pg");

const userName = process.env.USER;
const host = process.env.DATABASE_HOST;
const password = process.env.PASSWORD;
const databaseName = process.env.DATABASE_NAME;
const port = process.env.DATABASE_PORT;

const pool = new Pool({
  user: userName,
  host: host,
  database: databaseName,
  password: password,
  port: port,
});

const getClient = () => {
  return pool;
};

module.exports = {
  getClient,
};
