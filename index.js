const express = require('express');

const app = express();

const { pg } = require('pg');

var config = new pg({
    user: 'postgres', 
    database: 'test', 
    password: 'postgres', 
    host: '35.226.224.213', 
    port: 5432
});

config.connect();

config.query('SELECT * from persons', function(err, res) {
    if(!err) {
        console.log(res.rows)
    } else {
      console.log(err.message)
    }
  config.end;
});

app.get('/', (req, res) => {
    res.send('Node Server is running!!');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
