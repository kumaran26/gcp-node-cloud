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

async function queryDatabase() {
    try {
        // Connect to the database
        await client.connect();
        console.log('Connected to PostgreSQL!');

        // Example query: select all rows from a table named 'users'
        const res = await client.query('SELECT * FROM users');
        console.log('Query Results:', res.rows); // Logs the result rows
        hello = res.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
    } finally {
        // Disconnect from the database
        await client.end();
        console.log('Disconnected from PostgreSQL');
    }
}

queryDatabase()

// client.connect()
//     .then(() => {
//         hello = "succcess"
//          client.query('SELECT * FROM persons').then((resp) => {
//              hello = resp;
//          });
//         console.log('Connected to PostgreSQL!')
                
//                 })
//     .catch(err => console.error('Connection error', err.stack))
//     .finally(() => client.end());

app.get('/', (req, res) => {
    res.send(`Node Server is running!! ${hello}`);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
