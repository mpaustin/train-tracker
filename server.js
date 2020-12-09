require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// console.log('process env', process.env);

const mw = (req, res, next) => {
    console.log('req.url', req.url);
    next();
}

app.get('/', (req, res) => {
    res.send('~SUCCESS~');
})

const pgClient = new Pool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

app.get('/users/all', mw, async (req, res) => {
    const values = await pgClient.query('SELECT * FROM trainusers');
    res.cookie('myCookie', 'Secret cookie');
    res.status(200).send(values.rows);
})

app.get('/workouts/:user', mw, async (req, res) => {
    const { user } = req.params;
    const values = await pgClient.query(
        'select * from trainworkouts where username = $1', 
        [user]
    );
    res.status(200).send(values.rows);
})

app.post('/login', mw, async (req, res) => {

    const auth = req.headers.authorization;

    if (auth && auth.startsWith('Basic')) {

        const encoded = auth.substring('Basic '.length).trim();
        const decoded = Buffer.from(encoded, 'base64').toString('binary');

        const index = decoded.indexOf(':');
        const username = decoded.substring(0,index);
        const password = decoded.substring(index + 1);

        console.log('username', username);
        console.log('password', password);

        const user = await pgClient.query(
            'select * from trainusers where username = $1',
            [username]
        )
        console.log('user.rows[0]', user.rows[0])
        if (!user || !user.rows || user.rows[0].password !== password) {
            res.status(401).send();
        }
        res.status(200).send();
    }
    res.status(403).send();
}); 

app.listen(port, () => {
    console.log(`Train Tracker listening on port ${port}`);
})