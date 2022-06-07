const pg = require('pg');
const client = new pg.Client('postgres://localhost/wildcodeschool');

client.connect();

module.exports = client;
