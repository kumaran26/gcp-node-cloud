const express = require('express');

const app = express();

const pg = require('pg');

const config = {
  connectionString: 'postgres://postgres:postgres@35.226.224.213/test'
};

const pool = new pg.Pool(config);

const DB = {
    query: function(query, callback) {
        pool.connect((err, client, done) => {
            if(err) return callback(err)
            client.query(query, (err, results) => {
                done()
                if(err) { console.error("ERROR: ", err) }
                if(err) { return callback(err) }
                callback(null, results.rows)
            })
        });
    }
}

app.get('/', (req, res) => {
    res.send('Node Server is running!!');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
