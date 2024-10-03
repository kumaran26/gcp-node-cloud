const express = require('express');

const app = express();

const { Client } = require('pg');  

const client = new Client({
    user: 'postgres',
    host: '10.21.96.3',
    database: 'test',
    password: 'postgres',
    port: 5432,
});

let hello = "";

client.connect()
    .then(() => {
        hello = "succcess"
         client.query('SELECT * FROM persons').then((resp) => {
             hello = resp;
         });
        console.log('Connected to PostgreSQL!')
                
                })
    .catch(err => console.error('Connection error', err.stack))
    .finally(() => client.end());

app.get('/', (req, res) => {
    res.send(`Node Server is running!! ${hello}`);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
