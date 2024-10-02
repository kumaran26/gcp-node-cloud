const express = require('express');

const app = express();

const { Pool } = require('pg');

var config = {
    user: 'postgres', 
    database: 'test', 
    password: 'postgres', 
    host: '35.226.224.213', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};
const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});
pool.query('SELECT $1::int AS number', ['2'], function(err, res) {
    if(err) {
        return console.error('error running query', err);
    }
    console.log('number:', res.rows[0].number);
});

app.get('/', (req, res) => {
    res.send('Node Server is running!!');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
