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
let resp = "";

client.connect()
    .then(() => {
        hello = "succcess"
         //resp = await client.query('SELECT * FROM persons');
        console.log('Connected to PostgreSQL!')
                
                })
    .catch(err => console.error('Connection error', err.stack))
    .finally(() => client.end());

app.get('/', (req, res) => {
    res.send(`Node Server is running!! ${resp}`);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
